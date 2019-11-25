import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import newListContext from "../../store/context/NewListContext";

import Input from "../Input/Input";
import classes from "./TodoListInput.module.css";

const TodoListInput = () => {
  const dispatchCreateList = useContext(todosDispatch);
  const dispatchToggleNewList = useContext(newListContext);

  const onSubmit = value => {
    if (value.trim()) {
      dispatchCreateList({ type: "ADD_LIST", title: value });
      dispatchToggleNewList({ type: "TOGGLE_CREATE_LIST" });
    }
  };

  return (
    <div className={classes.TodoListInput}>
      <Input onFormSubmit={onSubmit} placeholder="enter todo list name" />
    </div>
  );
};

export default TodoListInput;
