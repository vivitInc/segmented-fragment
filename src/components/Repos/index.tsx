import * as React from "react";
import { ReposFragment } from "../../graphql";

type Props = {
  data: ReposFragment[];
};

export const Repos = ({ data }: Props) => {
  console.log({ data });
  return <>hello repos!!</>;
};
