"use client";

import { DataTable } from "@/components/ui/data-table";
import { Amenity } from "@/gql/graphql";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Amenity>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

export default function AmenityListTable({
  amenities,
}: {
  amenities: Amenity[];
}) {
  return (
    <DataTable
      columns={columns}
      data={amenities}
    />
  );
}
