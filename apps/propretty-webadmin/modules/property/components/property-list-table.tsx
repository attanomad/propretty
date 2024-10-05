"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Property, PropertyMedia, PropertyType } from "@/gql/graphql";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef, Row } from "@tanstack/react-table";
import { Link, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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

export const columns: ColumnDef<Property>[] = [
  {
    accessorKey: "uniqueCode",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "mediaList",
    header: "Image",
    cell: ({ row }) => {
      const mediaList = row.getValue<PropertyMedia[]>("mediaList");

      if (mediaList.length === 0) return null;

      const media = mediaList[0];

      return (
        <Image
          src={media.url}
          alt={media.id}
          width={100}
          height={100}
        />
      );
    },
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
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/properties/${id}`}>View Property</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
