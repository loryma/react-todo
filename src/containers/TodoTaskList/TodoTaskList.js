import React from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import TodoItem from "../../components/TodoItem/TodoItem";
import classes from "./TodoTaskList.module.css";
import "./transition.css";

const TodoTaskList = ({ todos, listId, filter }) => {
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });
  const List = filteredTodos.map(todo => (
    <TodoItem key={todo.id} todo={todo} listId={listId} />
  ));
  return List.length > 0 && <div className={classes.TodoList}>{List}</div>;
};

export default TodoTaskList;
