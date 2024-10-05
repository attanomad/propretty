import { Amenity } from "@/gql/graphql";
import { findAmenities } from "@/modules/amenity/actions/amenity.actions";
import AmenityListTable from "@/modules/amenity/components/amenity-list-table";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function AmenitiesPage() {
  const { code, message, data: amenities } = await findAmenities();

  if (code !== 0) {
    throw new Error(message);
  }

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
        <AmenityListTable amenities={amenities as Amenity[]} />
      </Suspense>
    </div>
  );
}
