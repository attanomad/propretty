import { gql } from "@apollo/client";
import { redirect } from "next/navigation";
import { getClient } from "../apollo-client";
import { createSession } from "../session";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const token = await getAccessToken(username, password);

  await createSession(token);

  redirect("/dashboard");
}

async function getAccessToken(username: string, password: string) {
  const { data } = await getClient().mutate<{ login: { accessToken: string } }>(
    {
      variables: { username, password },
      mutation: gql`
        mutation Login($username: String!, $password: String!) {
          login(credentials: { username: $username, password: $password }) {
            accessToken
          }
        }
      `,
    }
  );

  return data!.login.accessToken;
}
