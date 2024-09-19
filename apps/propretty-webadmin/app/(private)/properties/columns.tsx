import { ColumnDef } from "@tanstack/react-table";
import { Property, PropertyType } from "./types";

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "uniqueCode",
    header: "Code",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell({ row }) {
      const propertyType = row.getValue<PropertyType>("type");

      return <span>{propertyType.name}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
  },
];
