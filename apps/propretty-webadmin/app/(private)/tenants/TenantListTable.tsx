"use client";

import {
  FindTenantsDocument,
  FindTenantsQuery,
  FindTenantsQueryVariables,
  InputMaybe,
  QueryMode,
  TenantWhereInput,
} from "@/gql/graphql";
import { useMutableSearchParams } from "@/hooks/mutable-search-params";
import { useLazyQuery } from "@apollo/client";
import type { GetProp, TablePaginationConfig, TableProps } from "antd";
import { Table } from "antd";
import { SorterResult } from "antd/es/table/interface";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchBox, { SearchBoxFormSchema } from "./SearchBox";
import { searchParamsToPagination } from "./utils";

type Tenant = FindTenantsQuery["findManyAndCountTenants"]["data"][0];

export default function TenantListTable({
  data: _initialData,
}: {
  data?: FindTenantsQuery["findManyAndCountTenants"];
}) {
  const [tenants, setTenants] = useState<Tenant[]>(_initialData?.data || []);
  const columns = useColumns();
  const [searchParams, updateSearchParams] = useMutableSearchParams();
  const { current, take } = searchParamsToPagination(searchParams);
  const [search, setSearch] = useState<string | undefined>(
    searchParams.get("q") ?? undefined
  );
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      position: ["topRight", "bottomRight"],
      current,
      pageSize: take,
      showSizeChanger: true,
      showQuickJumper: true,
      total: _initialData?.count,
    },
  });
  const [_query, { loading, error, data }] = useLazyQuery<
    FindTenantsQuery,
    FindTenantsQueryVariables
  >(FindTenantsDocument);
  const query = (variables?: FindTenantsQueryVariables) => {
    updateSearchParams(
      variables
        ? {
            ...queryVariablesToObject(variables),
            q: search ? search : null,
          }
        : { skip: null, take: null, q: null }
    );

    return _query({ variables });
  };

  useEffect(() => {
    console.log("data changed: ", data);
    if (!data) return;

    console.log("setTenants()");
    setTenants(data.findManyAndCountTenants.data);
    setTableParams({
      ...tableParams,
      pagination: {
        ...tableParams.pagination,
        total: data.findManyAndCountTenants.count,
      },
    });
  }, [data?.findManyAndCountTenants]);

  useEffect(() => {
    console.log("search changed: ", search);
    if (search === undefined) return;
    if (search === searchParams.get("q")) return;
    if (search === "") return void query();

    query({
      where: {
        OR: [
          { firstName: { contains: search, mode: QueryMode.Insensitive } },
          { lastName: { contains: search, mode: QueryMode.Insensitive } },
        ],
      },
    }).then(() => {
      setTableParams((v) => ({
        ...v,
        pagination: {
          ...v.pagination,
          current: 1,
        },
      }));
    });
  }, [search]);

  const handleTableChange: TableProps<Tenant>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setTenants([]);
    }

    const queryVars = tableParamsToQueryVariables({ pagination });
    const where: InputMaybe<TenantWhereInput> | undefined = search
      ? {
          OR: [
            { firstName: { contains: search, mode: QueryMode.Insensitive } },
            { lastName: { contains: search, mode: QueryMode.Insensitive } },
          ],
        }
      : undefined;

    query({
      ...queryVars,
      where,
    });
  };
  const handleSearchSubmit = ({ search }: SearchBoxFormSchema) => {
    setSearch(search);
  };

  return (
    <>
      <SearchBox
        defaultValue={search}
        onSubmit={handleSearchSubmit}
      />
      <Table<Tenant>
        scroll={{ x: true }}
        columns={columns}
        dataSource={tenants}
        rowKey="id"
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </>
  );
}

const useColumns = () => {
  const t = useTranslations("TenantListTable.column");

  const columns: TableProps<Tenant>["columns"] = [
    {
      dataIndex: "firstName",
      title: t("firstName"),
      render: (_, { id, firstName }) => (
        <Link href={`/tenants/${id}`}>{firstName}</Link>
      ),
    },
    {
      dataIndex: "lastName",
      title: t("lastName"),
    },
    {
      dataIndex: "gender",
      title: t("gender"),
    },
    {
      dataIndex: "nationalId",
      title: t("nationalId"),
    },
    {
      dataIndex: "createdAt",
      title: t("createdAt"),
    },
    {
      dataIndex: "updatedAt",
      title: t("updatedAt"),
    },
  ];

  return columns;
};

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>["field"];
  sortOrder?: SorterResult<any>["order"];
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

const tableParamsToQueryVariables = ({ pagination }: TableParams) => {
  if (!pagination) return;

  const { pageSize, current } = pagination;

  const take = pageSize;
  const skip = pageSize && current ? (current - 1) * pageSize : undefined;

  return { take, skip };
};

const queryVariablesToObject = (vars: FindTenantsQueryVariables) => {
  const obj = {} as Record<"take" | "skip", string | null>;

  obj.take = typeof vars.take === "number" ? String(vars.take) : null;
  obj.skip = typeof vars.skip === "number" ? String(vars.skip) : null;

  return obj;
};
