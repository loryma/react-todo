import React from "react";
import TodoListTitle from "../TodoListTitle/TodoListTitle";

import classes from "./TodoListHeader.module.css";
import ListDelete from "../ListDelete/ListDelete";

const TodoListHeader = ({ title = "", listId }) => {
  return (
    <div className={classes.TodoListHeader}>
      <TodoListTitle title={title} />

      <ListDelete listId={listId} />
    </div>
  );
};

export default TodoListHeader;
