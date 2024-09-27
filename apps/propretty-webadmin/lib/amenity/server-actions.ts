"use server";

import { Amenity } from "@/app/(private)/amenities/actions";
import { ApolloError, gql } from "@apollo/client";
import { getClient } from "../apollo-client";

export async function findAmenities() {
  try {
    const { data } = await getClient().query<{ amenities: Amenity[] }>({
      query: gql`
        query FindAmenity($name: String) {
          amenities(name: $name) {
            id
            name
            description
          }
        }
      `,
    });

    return { code: 0, message: "success", data: data?.amenities };
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
