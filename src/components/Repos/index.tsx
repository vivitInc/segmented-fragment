import * as React from "react";
import { ReposFragment, SearchResultFragment } from "../../graphql";

type Props = {
  result: SearchResultFragment;
};

export const Repos = ({ result }: Props) => {
  const repos = result.nodes as ReposFragment[];
  const list = repos.map((repo) => (
    <tr key={repo.id}>
      <td>{repo.nameWithOwner}</td>
      <td>{repo.updatedAt}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Updated at</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};
