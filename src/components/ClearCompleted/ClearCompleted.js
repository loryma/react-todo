import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import classes from "./ClearCompleted.module.css";

const ClearCompleted = ({ listId }) => {
  const dispatch = useContext(todosDispatch);

  const onClick = e => {
    dispatch({ type: "clearCompleted", listId });
  };
  return (
    <div onClick={onClick} className={classes.ClearCompleted}>
      Clear completed
    </div>
  );
};

export default ClearCompleted;
