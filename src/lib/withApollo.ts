import { HttpLink, ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "isomorphic-unfetch";
import withApollo from "next-with-apollo";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const GITHUB_TOKEN = publicRuntimeConfig.GITHUB_TOKEN;

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: new HttpLink({
        uri: "https://api.github.com/graphql",
        credentials: "same-origin",
        headers: {
          Authorization: `bearer ${GITHUB_TOKEN}`,
        },
        fetch,
      }),
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
