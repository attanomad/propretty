"use server";

import { Property } from "@/app/(private)/properties/types";
import { gql } from "@apollo/client";
import { getClient } from "../apollo-client";

export async function createProperty(variables: {
  name: string;
  typeId: string;
  uniqueCode?: string;
  mediaList?: string[];
}) {
  const { data } = await getClient().mutate<{ createProperty: Property }>({
    variables,
    mutation: gql`
      mutation CreateProperty(
        $name: String!
        $typeId: String!
        $uniqueCode: String
        $mediaList: [String]
      ) {
        createProperty(
          createPropertyData: {
            name: $name
            typeId: $typeId
            uniqueCode: $uniqueCode
            mediaList: $mediaList
          }
        ) {
          id
          name
          type {
            id
            name
          }
        }
      }
    `,
  });

  return data?.createProperty;
}

export async function updateProperty(
  id: string,
  variables: {
    name: string;
    typeId: string;
    uniqueCode?: string;
    mediaList?: string[];
  }
) {
  const { data } = await getClient().mutate<{ updateProperty: Property }>({
    variables: { ...variables, id },
    mutation: gql`
      mutation UpdateProperty(
        $id: String!
        $name: String
        $typeId: String
        $uniqueCode: String
        $mediaList: [String!]
      ) {
        updateProperty(
          id: $id
          updatePropertyData: {
            name: $name
            typeId: $typeId
            uniqueCode: $uniqueCode
            mediaList: $mediaList
          }
        ) {
          id
          name
          type {
            id
            name
          }
        }
      }
    `,
  });

  return data?.updateProperty;
}

export async function saveProperty(fd: FormData) {
  console.log("form data: ", fd);
}

export async function findPropertyById(id: string) {
  try {
    const { data, errors } = await getClient().query<{
      findProperty: Property;
    }>({
      variables: { id },
      query: gql`
        query FindProperty($id: String!) {
          findProperty(id: $id) {
            name
            id
            type {
              id
              name
            }
            mediaList {
              id
              url
              mimetype
            }
            amenities {
              id
              name
            }
          }
        }
      `,
    });

    return data.findProperty;
  } catch (e) {
    console.log("error: ", e);
    if (e instanceof Error) {
      throw new Error(`Failed to query property by ID: ${e.message}`);
    }

    throw e;
  }
}

export async function findProperties() {
  const { data } = await getClient().query<{ properties: Property[] }>({
    query: gql`
      query {
        properties {
          id
          name
          type {
            id
            name
          }
          mediaList {
            url
          }
          createdAt
          updatedAt
        }
      }
    `,
  });

  // console.log("gql data: ", data);

  return data.properties;
}
