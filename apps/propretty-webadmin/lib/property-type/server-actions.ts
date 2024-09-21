"use server";

import { PropertyType } from "@/app/(private)/properties/types";
import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export async function findPropertyTypes() {
  const { data } = await getClient().query<{ propertyTypes: PropertyType[] }>({
    query: gql`
      query {
        propertyTypes {
          id
          name
          description
        }
      }
    `,
  });

  // console.log("gql data: ", data);

  return data.propertyTypes;
}
