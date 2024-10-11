import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/experimental-nextjs-app-support";
import { authLink } from "./apollo";

const httpLink = new HttpLink({
  uri: `${process.env.PROPRETTY_API_URL}/graphql`,
});

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink, httpLink]),
  });
});
