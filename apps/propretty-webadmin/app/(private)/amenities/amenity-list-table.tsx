"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../properties/data-table";
import { Amenity } from "./actions";

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
