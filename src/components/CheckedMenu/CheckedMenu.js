import React, { useContext } from "react";
import CheckAll from "../CheckAll/CheckAll";
import ItemsCounter from "../ItemsCounter/ItemsCounter";
import todosDispath from "../../store/context/TodosDispatchContext";

import todosContext from "../../store/context/TodosContext";

import classes from "./CheckedMenu.module.css";

const CheckedMenu = ({ listId }) => {
  const dispatch = useContext(todosDispath);
  const list = useContext(todosContext);
  const todos = list.find(el => el.id === listId).todos;

  const containActiveTodos =
    todos.length === 0 || todos.some(el => !el.completed);

  const number = todos.reduce((acc, el) => (el.completed ? acc : ++acc), 0);

  const onChange = () => {
    dispatch({ type: "checkAll", check: containActiveTodos && true, listId });
  };

  return (
    <div className={classes.CheckedMenu}>
      <CheckAll checked={!containActiveTodos} onChange={onChange} />
      <ItemsCounter>{number}</ItemsCounter>
    </div>
  );
};

export default CheckedMenu;
