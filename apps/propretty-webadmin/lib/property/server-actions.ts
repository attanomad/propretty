"use server";

import { Property } from "@/app/(private)/properties/types";
import { amenitiesFieldValidation } from "@/components/property/form/amenities-field/validation";
import { ApolloError, gql } from "@apollo/client";
import { getClient } from "../apollo-client";
import { ServerActionBaseResponse } from "../server-actions.types";

export interface CreatePropertyVariables {
  name: string;
  typeId: string;
  uniqueCode?: string;
  mediaList?: string[];
  priceList?: { currency: string; price: number }[];
  landSize?: number;
  floorSize?: number;
  [amenitiesFieldValidation.gqlKey]?: string[];
}

export async function createProperty(
  variables: CreatePropertyVariables
): Promise<ServerActionBaseResponse<Property>> {
  try {
    const { data } = await getClient().mutate<{
      createProperty: Property;
    }>({
      variables,
      mutation: gql`
        mutation CreateProperty(
          $name: String!
          $status: Status!
          $typeId: String!
          $uniqueCode: String
          $mediaList: [String]
          $priceList: [CreatePriceInput!]
          $amenityIdList: [String!]
        ) {
          createProperty(
            createPropertyData: {
              name: $name
              status: $status
              typeId: $typeId
              uniqueCode: $uniqueCode
              mediaList: $mediaList
              priceList: $priceList
              amenityIds: $amenityIdList
            }
          ) {
            id
            name
            uniqueCode
            status
            priceList {
              currency
              price
            }
            type {
              id
              name
            }
            amenities {
              id
              name
            }
          }
        }
      `,
    });

    return { code: 0, message: "success", data: data?.createProperty };
  } catch (e) {
    console.log(`Failed to create property: `, JSON.stringify(e));

    let code: number | null = null;
    let message: string = "";

    if (e instanceof ApolloError) {
      if (e.graphQLErrors.length > 0) {
        message = e.graphQLErrors[0].message || "GraphQL error occurred";
      }

      // Handle network error
      if (e.networkError) {
        message = "Network error occurred";
      }
    } else {
      // If it's not an ApolloError, handle it as a generic error
      console.log("Unexpected Error: ", e);
      message = "Unexpected error occurred";
    }

    return { code: code ?? 500, message: message || "something went wrong" };
  }
}

export interface UpdatePropertyVariables {
  name: string;
  typeId: string;
  uniqueCode?: string;
  mediaList?: string[];
  priceList?: { currency: string; price: number }[];
  landSize?: number;
  floorSize?: number;
  [amenitiesFieldValidation.gqlKey]?: string[];
}

export async function updateProperty(
  id: string,
  variables: UpdatePropertyVariables
): Promise<ServerActionBaseResponse<Property>> {
  console.log(`updateProperty()`, variables);

  const { data } = await getClient().mutate<{ updateProperty: Property }>({
    variables: { ...variables, id },
    mutation: gql`
      mutation UpdateProperty(
        $id: String!
        $name: String
        $typeId: String
        $uniqueCode: String
        $landSize: Decimal
        $floorSize: Decimal
        $mediaList: [String!]
        $priceList: [CreatePriceInput!]
        $${amenitiesFieldValidation.gqlKey}: [String!]
      ) {
        updateProperty(
          id: $id
          updatePropertyData: {
            name: $name
            typeId: $typeId
            uniqueCode: $uniqueCode
            landSize: $landSize
            floorSize: $floorSize
            mediaList: $mediaList
            priceList: $priceList
            amenityIds: $${amenitiesFieldValidation.gqlKey}
          }
        ) {
          id
          name
          status
          uniqueCode
          landSize
          floorSize
          priceList {
            currency
            price
          }
          type {
            id
            name
          }
          amenities {
            id
            name
          }
        }
      }
    `,
  });

  return { code: 0, message: "success", data: data?.updateProperty };
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
            description
            status
            uniqueCode
            id
            commercialStatus
            furnishing
            floorSize
            landSize
            priceList {
              id
              price
              currency
            }
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
    console.log("error: ", JSON.stringify(e));
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
          uniqueCode
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
