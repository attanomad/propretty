"use server";

import {
  FindPropertyTypesQuery,
  FindPropertyTypesQueryVariables,
} from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import { ApolloError, gql } from "@apollo/client";
import { ServerActionBaseResponse } from "../../../lib/server-actions.types";

export async function findPropertyTypes(): Promise<
  ServerActionBaseResponse<FindPropertyTypesQuery["propertyTypes"]>
> {
  try {
    const { data } = await getClient().query<
      FindPropertyTypesQuery,
      FindPropertyTypesQueryVariables
    >({
      query: gql`
        query FindPropertyTypes($where: PropertyTypeWhereInput) {
          findPropertyTypes(where: $where) {
            id
            name
            description
          }
        }
      `,
    });

    return { code: 0, message: "success", data: data.propertyTypes };
  } catch (e) {
    console.log(`Failed to find property types: `, JSON.stringify(e));

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
