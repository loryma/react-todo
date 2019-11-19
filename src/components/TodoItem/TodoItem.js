import React from "react";
import Completed from "../Completed/Completed";
import Delete from "../Delete/Delete";

import classes from "./TodoItem.module.css";

const TodoItem = ({ todo }) => {
  const textClasses = [
    classes.TodoText,
    todo.completed ? classes.TodoTextCompleted : ""
  ].join(" ");
  return (
    <div className={classes.TodoItem}>
      <div className={classes.Completed}>
        <Completed checked={todo.completed} id={todo.id} />
      </div>
      <div className={textClasses}>{todo.text}</div>
      <div className={classes.Delete}>
        <Delete id={todo.id} />
      </div>
    </div>
  );
};

export default TodoItem;
