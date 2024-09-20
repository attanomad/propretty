import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { Suspense } from "react";
import PropertyListTable from "./property-list-table";
import { Property } from "./types";

// export async function findProperties() {
//   const data = await fetch(`${process.env.PROPRETTY_API_URL}/properties`).then<
//     BaseResponse<Property[]>
//   >((res) => res.json());

//   if (data.code != 0) {
//     throw new Error(data.message);
//   }

//   return data.data || [];
// }
async function findProperties() {
  const { data } = await getClient().query<{ properties: Property[] }>({
    query: gql`
      query {
        properties {
          name
          type {
            id
            name
          }
        }
      }
    `,
  });

  // console.log("gql data: ", data);

  return data.properties;
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
