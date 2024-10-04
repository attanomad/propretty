import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";
import { Amenity } from "@propretty/common";

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
