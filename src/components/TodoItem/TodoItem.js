import React from "react";
import Completed from "../Completed/Completed";
import TodoDelete from "../TodoDelete/TodoDelete";

import classes from "./TodoItem.module.css";

const TodoItem = ({ todo, listId }) => {
  const textClasses = [
    classes.TodoText,
    todo.completed ? classes.TodoTextCompleted : ""
  ].join(" ");
  return (
    <div className={classes.TodoItem}>
      <div className={classes.Completed}>
        <Completed checked={todo.completed} id={todo.id} listId={listId} />
      </div>
      <div className={textClasses}>{todo.text}</div>
      <div className={classes.Delete}>
        <TodoDelete id={todo.id} listId={listId} />
      </div>
    </div>
  );
};

export default TodoItem;
