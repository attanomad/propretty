import { ApolloLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "./session";

export const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      /**
       * @Note Next.js fucking turns exported sync functions into async functions???
       */
      authorization: `Bearer ${await getToken()}`,
    },
  };
});

export const loggerLink = new ApolloLink((operation, forward) => {
  console.info("request headers: ", operation.getContext().headers);

  return forward(operation).map((result) => {
    console.info("response headers: ", operation.getContext().response.headers);
    return result;
  });
});
