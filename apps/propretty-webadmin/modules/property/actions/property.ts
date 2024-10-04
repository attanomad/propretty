"use server";

import { getClient } from "@/lib/apollo-client";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { ApolloError, gql } from "@apollo/client";
import { Property } from "@propretty/common";
import { amenitiesFieldValidation } from "../components/form/amenities-field/validation";

export interface CreatePropertyVariables {
  name: string;
  typeId: string;
  uniqueCode?: string;
  mediaList?: string[];
  priceList?: { currency: string; price: number }[];
  landSize?: number;
  floorSize?: number;
  location?: UpsertLocationInput;
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
          $location: UpsertLocationInput
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
              location: $location
            }
          ) {
            id
            name
            uniqueCode
            status
            location {
              id
            }
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

export interface UpsertLocationInput {
  id?: string | null;
  address?: string | null;
  subdistrict?: string | null;
  district?: string | null;
  province?: string | null;
  country?: string | null;
  postalCode?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

export interface UpdatePropertyVariables {
  name: string;
  typeId: string;
  uniqueCode?: string;
  mediaList?: string[];
  priceList?: { currency: string; price: number }[];
  landSize?: number;
  floorSize?: number;
  location?: UpsertLocationInput;
  [amenitiesFieldValidation.gqlKey]?: string[];
}

export async function updateProperty(
  id: string,
  variables: UpdatePropertyVariables
): Promise<ServerActionBaseResponse<Property>> {
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
        $location: UpsertLocationInput
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
            location: $location
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
            location {
              id
              address
              subdistrict
              district
              province
              postalCode
              country
              latitude
              longitude
            }
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

  return data.properties;
}
