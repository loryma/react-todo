import React from "react";
import Link from "../Link/Link";

const FILTERS = [
  { text: "All", filter: "all" },
  { text: "Active", filter: "active" },
  { text: "Completed", filter: "completed" }
];

const Navigation = ({ activeFilter, listId }) => {
  const Links = FILTERS.map(({ filter, text }) => (
    <Link
      key={text}
      activeFilter={activeFilter}
      listId={listId}
      filter={filter}
    >
      {text}
    </Link>
  ));

  return <div>{Links}</div>;
};

export default Navigation;
