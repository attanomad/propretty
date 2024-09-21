import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { findProperties } from "./actions";
import PropertyListTable from "./property-list-table";

async function PropertyList() {
  const properties = await findProperties();

  return <PropertyListTable properties={properties} />;
}

export default async function PropertiesPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Properties</h1>
      <Link
        href="/properties/new"
        className="flex items-center content-center h-7 gap-1"
      >
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Property
        </span>
      </Link>
      <Suspense
        fallback={<p className="font-bold p-4 m-4">Loading property list...</p>}
      >
        <PropertyList />
      </Suspense>
    </div>
  );
}
