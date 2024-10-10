import { setContext } from "@apollo/client/link/context";
import { getToken } from "./session";

export const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${getToken()}`,
    },
  };
});
