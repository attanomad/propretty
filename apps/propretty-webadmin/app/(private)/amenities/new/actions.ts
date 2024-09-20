"use server";

import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

// export async function createAmenity(formData: FormData) {
export async function createAmenity(variables: {
  name: string;
  description?: string;
}) {
  const { data } = await getClient().mutate({
    variables,
    mutation: gql`
      mutation CreateAmenity($name: String!, $description: String!) {
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

  return data;
}
