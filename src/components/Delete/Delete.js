import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import classes from "./Delete.module.css";

const Delete = ({ id, listId }) => {
  const dispatch = useContext(todosDispatch);

  const onClick = () => {
    dispatch({ type: "deleteTodo", id, listId });
  };
  return <div className={classes.Delete} onClick={onClick}></div>;
};

export default Delete;
