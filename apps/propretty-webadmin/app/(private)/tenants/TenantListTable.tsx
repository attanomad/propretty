"use client";

import { DataTable } from "@/components/ui/data-table";
import { Tenant } from "@/gql/graphql";
import { ColumnDef, Row } from "@tanstack/react-table";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function TenantListTable({ tenants }: { tenants: Tenant[] }) {
  const router = useRouter();
  const columns = useColumns();
  const handleRowClick = (row: Row<Tenant>) =>
    router.push(`/tenants/${row.original.id}`);

  return (
    <DataTable
      columns={columns}
      data={tenants}
      onRowClick={handleRowClick}
    />
  );
}

const useColumns = () => {
  const t = useTranslations("TenantListTable.column");

  const columns: ColumnDef<Tenant>[] = [
    {
      accessorKey: "firstName",
      header: t("firstName"),
    },
    {
      accessorKey: "lastName",
      header: t("lastName"),
    },
    {
      accessorKey: "gender",
      header: t("gender"),
    },
    {
      accessorKey: "nationalId",
      header: t("nationalId"),
    },
    {
      accessorKey: "createdAt",
      header: t("createdAt"),
    },
    {
      accessorKey: "updatedAt",
      header: t("updatedAt"),
    },
  ];

  return columns;
};
