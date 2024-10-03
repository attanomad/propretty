"use client";

import { Row } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Property } from "./types";

export default function PropertyListTable({
  properties,
}: {
  properties: Property[];
}) {
  const router = useRouter();
  const handleRowClick = (row: Row<Property>) =>
    router.push(`/properties/${row.original.id}`);

  return (
    <DataTable
      columns={columns}
      data={properties}
      onRowClick={handleRowClick}
    />
  );
}
