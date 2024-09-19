import { Suspense } from "react";
import PropertyListTable from "./property-list-table";
import { BaseResponse, Property } from "./types";

export async function findProperties() {
  const data = await fetch(`${process.env.PROPRETTY_API_URL}/properties`).then<
    BaseResponse<Property[]>
  >((res) => res.json());

  if (data.code != 0) {
    throw new Error(data.message);
  }

  return data.data || [];
}

async function PropertyList() {
  const properties = await findProperties();

  return <PropertyListTable properties={properties} />;
}

export default async function PropertiesPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Properties</h1>
      <Suspense
        fallback={<p className="font-bold p-4 m-4">Loading property list...</p>}
      >
        <PropertyList />
      </Suspense>
    </div>
  );
}
