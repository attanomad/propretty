import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export interface Amenity {
  id: string;
  name: string;
  description?: string;
}

export async function findAnemities() {
  const { data } = await getClient().query<{ amenities: Amenity[] }>({
    query: gql`
      query {
        amenities {
          id
          name
          description
        }
      }
    `,
  });

  return data.amenities;
}
