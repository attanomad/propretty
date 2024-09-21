import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

export interface File {
  id: string;
  name: string;
  url: string;
  mimetype: string;
}

export async function findFiles() {
  const { data } = await getClient().query<{ files: File[] }>({
    query: gql`
      query {
        files {
          id
          name
          url
          mimetype
        }
      }
    `,
  });

  return data.files;
}
