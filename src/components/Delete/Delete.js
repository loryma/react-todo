import React from "react";

import classes from "./Delete.module.css";

const Delete = ({ onDeleteClick, color }) => {
  const deleteClasses = [classes.Delete, color ? classes[color] : ""].join(" ");
  return <div className={deleteClasses} onClick={onDeleteClick}></div>;
};

export default Delete;
