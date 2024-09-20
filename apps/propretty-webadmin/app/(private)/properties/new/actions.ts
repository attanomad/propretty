"use server";

import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { PropertyType } from "../types";

// export async function createProperty(formData: FormData) {
export async function createProperty(variables: {
  name: string;
  typeId: string;
  uniqueCode?: string;
}) {
  const { data } = await getClient().mutate({
    variables,
    mutation: gql`
      mutation CreateProperty(
        $name: String!
        $typeId: String!
        $uniqueCode: String
      ) {
        createProperty(
          createPropertyData: {
            name: $name
            typeId: $typeId
            uniqueCode: $uniqueCode
          }
        ) {
          name
          type {
            id
            name
          }
        }
      }
    `,
  });

  return data;
}

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
