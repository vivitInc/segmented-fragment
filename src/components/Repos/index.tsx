import * as React from "react";
import { NodesFragment, ReposFragment } from "../../graphql";

type Props = {
  result: ReposFragment;
};

export const Repos = ({ result }: Props) => {
  const repos = result.search.nodes as NodesFragment[];
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
