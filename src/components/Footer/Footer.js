import React from "react";
import Navigation from "../Navigation/Navigation";
import ClearCompleted from "../ClearCompleted/ClearCompleted";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <Navigation />
      <ClearCompleted />
    </div>
  );
};

export default Footer;
