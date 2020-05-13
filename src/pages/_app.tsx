import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";
import { AppProps } from "next/app";
import withApollo from "../lib/withApollo";

type Props = {
  apollo: ApolloClient<{}>;
} & AppProps;

const MyApp = ({ Component, pageProps, apollo }: Props) => (
  <>
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  </>
);

export default withApollo(MyApp);
