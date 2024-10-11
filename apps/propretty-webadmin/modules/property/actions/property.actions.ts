"use server";

import {
  CreatePropertyDocument,
  CreatePropertyMutation,
  CreatePropertyMutationVariables,
  FindPropertiesDocument,
  FindPropertiesQuery,
  FindPropertiesQueryVariables,
  FindPropertyByIdDocument,
  FindPropertyByIdQuery,
  FindPropertyByIdQueryVariables,
  UpdatePropertyDocument,
  UpdatePropertyMutation,
  UpdatePropertyMutationVariables,
} from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { ApolloError } from "@apollo/client";

export async function createProperty(
  variables: CreatePropertyMutationVariables
): Promise<ServerActionBaseResponse<CreatePropertyMutation["createProperty"]>> {
  try {
    const { data } = await getClient().mutate<
      CreatePropertyMutation,
      CreatePropertyMutationVariables
    >({
      variables,
      mutation: CreatePropertyDocument,
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

export async function updateProperty(
  variables: UpdatePropertyMutationVariables
): Promise<ServerActionBaseResponse<UpdatePropertyMutation["updateProperty"]>> {
  const { data } = await getClient().mutate<
    UpdatePropertyMutation,
    UpdatePropertyMutationVariables
  >({
    variables,
    mutation: UpdatePropertyDocument,
  });

  return { code: 0, message: "success", data: data?.updateProperty };
}

export async function findPropertyById(
  variables: FindPropertyByIdQueryVariables
) {
  try {
    const { data } = await getClient().query<
      FindPropertyByIdQuery,
      FindPropertyByIdQueryVariables
    >({
      variables,
      query: FindPropertyByIdDocument,
    });

    return data.findUniqueProperty;
  } catch (e) {
    console.log(`Failed to find property by ID: `, JSON.stringify(e));

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

export async function findProperties() {
  try {
    const { data } = await getClient().query<
      FindPropertiesQuery,
      FindPropertiesQueryVariables
    >({
      query: FindPropertiesDocument,
    });

    return data.findProperties;
  } catch (e) {
    console.log(`Failed to find properties: `, JSON.stringify(e));

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
