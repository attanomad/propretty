import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { findAnemities } from "./actions";
import AmenityListTable from "./amenity-list-table";

export default async function AmenitiesPage() {
  const amenities = await findAnemities();

  return (
    <div className="flex flex-col gap-4">
      <h1>Amenities</h1>
      <Link
        href="/amenities/new"
        className="flex items-center content-center h-7 gap-1"
      >
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          Add Amenity
        </span>
      </Link>
      <Suspense
        fallback={<p className="font-bold p-4 m-4">Loading property list...</p>}
      >
        <AmenityListTable amenities={amenities} />
      </Suspense>
    </div>
  );
  //   return <AmenityListTable amenities={amenities} />;
}
