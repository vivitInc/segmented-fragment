import { filter } from "graphql-anywhere";
import Head from "next/head";
import * as React from "react";
import { Repos } from "../components";
import { ReposFragment, ReposFragmentDoc, useIndexQuery } from "../graphql";

export default () => {
  const { data, loading } = useIndexQuery();
  const nodes = data?.search.nodes || [];

  if (loading) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>Segmented fragment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Repos data={filter<ReposFragment[]>(ReposFragmentDoc, nodes)} />
      </div>
    </>
  );
};
