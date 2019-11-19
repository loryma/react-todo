import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Link.module.css";

const Link = ({ to, children }) => {
  return (
    <NavLink
      exact
      activeClassName={classes.Active}
      className={classes.Link}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default Link;
