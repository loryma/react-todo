import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import classes from "./ClearCompleted.module.css";

const ClearCompleted = () => {
  const dispatch = useContext(todosDispatch);

  const onClick = e => {
    dispatch({ type: "clearCompleted" });
  };
  return (
    <div onClick={onClick} className={classes.ClearCompleted}>
      Clear completed
    </div>
  );
};

export default ClearCompleted;
