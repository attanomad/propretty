import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { Property } from "./types";

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

// export async function findProperties() {
//   const data = await fetch(`${process.env.PROPRETTY_API_URL}/properties`).then<
//     BaseResponse<Property[]>
//   >((res) => res.json());

//   if (data.code != 0) {
//     throw new Error(data.message);
//   }

//   return data.data || [];
// }
