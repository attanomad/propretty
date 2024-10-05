"use server";

import { FindFilesQuery, FindFilesQueryVariables } from "@/gql/graphql";
import { getClient } from "@/lib/apollo-client";
import { BaseResponseBody } from "@/lib/propretty-rest-api";
import { ServerActionBaseResponse } from "@/lib/server-actions.types";
import { ApolloError, gql } from "@apollo/client";

export async function saveMediaFile(formData: FormData) {
  const response = (await fetch(
    `${process.env.PROPRETTY_API_URL}/files/upload`,
    {
      method: "POST",
      body: formData,
    }
  ).then((res) => res.json())) as BaseResponseBody<{ id: string; url: string }>;

  return response;
}

export async function findFiles(): Promise<
  ServerActionBaseResponse<FindFilesQuery["files"]>
> {
  try {
    const { data } = await getClient().query<
      FindFilesQuery,
      FindFilesQueryVariables
    >({
      query: gql`
        query FindFiles {
          files {
            id
            name
            url
            mimetype
          }
        }
      `,
    });

    return { code: 0, message: "success", data: data?.files };
  } catch (e) {
    console.log(`Failed to find files: `, JSON.stringify(e));

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
