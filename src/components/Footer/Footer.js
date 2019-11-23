import React from "react";
import Navigation from "../Navigation/Navigation";
import ClearCompleted from "../ClearCompleted/ClearCompleted";
import classes from "./Footer.module.css";

const Footer = ({ listId, activeFilter }) => {
  return (
    <div className={classes.Footer}>
      <Navigation listId={listId} activeFilter={activeFilter} />
      <ClearCompleted listId={listId} />
    </div>
  );
};

export default Footer;
