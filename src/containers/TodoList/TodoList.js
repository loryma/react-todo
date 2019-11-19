import React from "react";
import TodoItem from "../../components/TodoItem/TodoItem";
import classes from "./TodoList.module.css";

const TodoList = ({ todos }) => {
  const List = todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  return <div className={classes.TodoList}>{List}</div>;
};

export default TodoList;
