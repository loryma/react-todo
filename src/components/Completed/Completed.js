import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import classes from "./Completed.module.css";

const Completed = ({ checked, id }) => {
  const dispatch = useContext(todosDispatch);

  const onChange = () => {
    dispatch({ type: "toggleCompleted", id: id });
  };
  return (
    <input
      className={classes.Completed}
      type="checkbox"
      onChange={onChange}
      checked={checked}
    />
  );
};

export default Completed;
