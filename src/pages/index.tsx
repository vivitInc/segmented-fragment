import { filter } from "graphql-anywhere";
import Head from "next/head";
import * as React from "react";
import { Repos } from "../components";
import {
  SearchResultFragment,
  SearchResultFragmentDoc,
  useIndexQuery,
} from "../graphql";

export default () => {
  const { data, loading } = useIndexQuery();
  const search = data?.search;

  if (loading) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>Segmented fragment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Repos
        result={filter<SearchResultFragment>(SearchResultFragmentDoc, search)}
      />
    </>
  );
};
