import React from "react";
import Link from "../Link/Link";

const PATHS = [
  { link: "/", text: "All" },
  { link: "/active", text: "Active" },
  { link: "/completed", text: "Completed" }
];

const Navigation = () => {
  const Links = PATHS.map(({ link, text }) => <Link to={link}>{text}</Link>);

  return <div>{Links}</div>;
};

export default Navigation;
