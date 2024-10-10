"use client";

import { FindTenantsQuery, FindTenantsQueryVariables } from "@/gql/graphql";
import { gql, useQuery } from "@apollo/client";
import type { GetProp, TablePaginationConfig, TableProps } from "antd";
import { Table } from "antd";
import { SorterResult } from "antd/es/table/interface";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

type Tenant = FindTenantsQuery["findTenants"][0];

export default function TenantListTable() {
  const columns = useColumns();
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const { loading, error, data, refetch } = useQuery<
    FindTenantsQuery,
    FindTenantsQueryVariables
  >(gql`
    query FindTenants(
      $where: TenantWhereInput
      $take: Int
      $skip: Int
      $cursor: TenantWhereUniqueInput
    ) {
      findTenants(where: $where, take: $take, skip: $skip, cursor: $cursor) {
        id
        nationalId
        firstName
        lastName
        gender
        createdAt
        updatedAt
      }
    }
  `);
  const tenants = data?.findTenants ?? [];

  useEffect(() => {
    refetch({});
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);

  // const handleRowClick = (row: Row<Tenant>) =>
  //   router.push(`/tenants/${row.original.id}`);
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
    }
  };

  return (
    <Table<Tenant>
      columns={columns}
      dataSource={tenants}
      rowKey="id"
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
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

// const findTenants = async (
//   variables?: TenantWhereInput
// ): Promise<ServerActionBaseResponse<FindTenantsQuery["findTenants"]>> => {
//   try {
//     const { data } = await getClient().query<
//       FindTenantsQuery,
//       TenantWhereInput
//     >({
//       variables,
//       query: gql`
//         query FindTenants(
//           $where: TenantWhereInput
//           $take: Int
//           $skip: Int
//           $cursor: TenantWhereUniqueInput
//         ) {
//           findTenants(
//             where: $where
//             take: $take
//             skip: $skip
//             cursor: $cursor
//           ) {
//             id
//             nationalId
//             firstName
//             lastName
//             gender
//             createdAt
//             updatedAt
//           }
//         }
//       `,
//     });

//     return { code: 0, message: "Success", data: data?.findTenants };
//   } catch (e) {
//     console.log(`Failed to find tenants: `, JSON.stringify(e));

//     let code: number | null = null;
//     let message: string = "";

//     if (e instanceof ApolloError) {
//       if (e.graphQLErrors.length > 0) {
//         message = e.graphQLErrors[0].message || "GraphQL error occurred";
//       }

//       // Handle network error
//       if (e.networkError) {
//         message = "Network error occurred";
//       }
//     } else {
//       // If it's not an ApolloError, handle it as a generic error
//       console.log("Unexpected Error: ", e);
//       message = "Unexpected error occurred";
//     }

//     return { code: code ?? 500, message: message || "something went wrong" };
//   }
// };
