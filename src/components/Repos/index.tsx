import * as React from "react";
import { ReposFragment } from "../../graphql";

type Props = {
  repos: ReposFragment[];
};

export const Repos = ({ repos }: Props) => {
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
