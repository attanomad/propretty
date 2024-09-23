"use server";

import { ApolloError, gql } from "@apollo/client";
import { redirect } from "next/navigation";
import { getClient } from "../apollo-client";
import { createSession } from "../session";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  try {
    const token = await getAccessToken(username, password);
    await createSession(token);
  } catch (e) {
    if (e instanceof UnauthorizedError) {
      return e.message;
    }

    console.error(e);
    return "Something went wrong";
  }

  redirect("/");
}

async function getAccessToken(username: string, password: string) {
  try {
    const { data } = await getClient().mutate<{
      login: { accessToken: string };
    }>({
      variables: { username, password },
      mutation: gql`
        mutation Login($username: String!, $password: String!) {
          login(credentials: { username: $username, password: $password }) {
            accessToken
          }
        }
      `,
    });

    return data!.login.accessToken;
  } catch (e) {
    if (e instanceof ApolloError) {
      if (e.message === "User not found" || e.message === "Unauthorized") {
        throw new UnauthorizedError();
      }
    }

    throw e;
  }
}

class UnauthorizedError extends Error {
  message: string = "Username or password is invalid";
}
