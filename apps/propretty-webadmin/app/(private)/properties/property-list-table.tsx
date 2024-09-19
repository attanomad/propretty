"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Property } from "./types";

export default function PropertyListTable({
  properties,
}: {
  properties: Property[];
}) {
  return (
    <DataTable
      columns={columns}
      data={properties}
    />
  );
}
