import React from "react";
import classes from "./ItemsCounter.module.css";

const ItemsCounter = ({ children }) => {
  return (
    <div className={classes.ItemsCounter}>
      {children} item{children === 1 ? "" : "s"} left
    </div>
  );
};

export default ItemsCounter;
