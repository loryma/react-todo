import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TodoItem from "../../components/TodoItem/TodoItem";
import classes from "./TodoList.module.css";
import "./transition.css";

const TodoList = ({ todos }) => {
  const List = todos.map(todo => (
    <CSSTransition key={todo.id} timeout={300} classNames="item">
      <TodoItem todo={todo} />
    </CSSTransition>
  ));
  return <TransitionGroup className={classes.TodoList}>{List}</TransitionGroup>;
};

export default TodoList;
