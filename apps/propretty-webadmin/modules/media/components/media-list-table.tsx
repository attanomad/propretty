"use client";

import { DataTable } from "@/components/ui/data-table";
import { File } from "@/gql/graphql";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<File>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "url",
    header: "URL",
  },
  {
    accessorKey: "mimetype",
    header: "MIME Type",
  },
];

export default function FileListTable({ files }: { files: File[] }) {
  return (
    <DataTable
      columns={columns}
      data={files}
    />
  );
}
