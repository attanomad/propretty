"use server";

import {
  CreateAmenityMutation,
  CreateAmenityMutationVariables,
  FindAmenitiesQuery,
  FindAmenitiesQueryVariables,
} from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { ApolloError, gql } from "@apollo/client";

export async function findAmenities(
  variables?: FindAmenitiesQueryVariables
): Promise<ServerActionBaseResponse<FindAmenitiesQuery["amenities"]>> {
  try {
    const { data } = await getClient().query<
      FindAmenitiesQuery,
      FindAmenitiesQueryVariables
    >({
      variables,
      query: gql`
        query FindAmenities {
          amenities {
            id
            name
            description
          }
        }
      `,
    });

    return { code: 0, message: "Success", data: data?.amenities };
  } catch (e) {
    console.log(`Failed to find amenities: `, JSON.stringify(e));

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

export async function createAmenity(
  variables: CreateAmenityMutationVariables
): Promise<ServerActionBaseResponse<CreateAmenityMutation["createAmenity"]>> {
  try {
    const { data } = await getClient().mutate<
      CreateAmenityMutation,
      CreateAmenityMutationVariables
    >({
      variables,
      mutation: gql`
        mutation CreateAmenity($name: String!, $description: String) {
          createAmenity(
            createAmenityData: { name: $name, description: $description }
          ) {
            id
            name
            description
          }
        }
      `,
    });

    return { code: 0, message: "Success", data: data?.createAmenity };
  } catch (e) {
    console.log(`Failed to create an amenity: `, JSON.stringify(e));

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
