import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    <CSSTransition key={todo.id} timeout={300} classNames="item">
      <TodoItem todo={todo} listId={listId} />
    </CSSTransition>
  ));
  return <TransitionGroup className={classes.TodoList}>{List}</TransitionGroup>;
};

export default TodoTaskList;
