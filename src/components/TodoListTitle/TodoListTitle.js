import React from "react";

import classes from "./TodoListTitle.module.css";

const TodoListTitle = ({ title = "" }) => {
  return <div className={classes.TodoListTitle}>{title}</div>;
};

export default TodoListTitle;
