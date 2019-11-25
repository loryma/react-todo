import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import Checkbox from "../Checkbox/Checkbox";
import classes from "./Completed.module.css";

const Completed = ({ checked, id, listId }) => {
  const dispatch = useContext(todosDispatch);

  const onChange = () => {
    dispatch({ type: "toggleCompleted", id, listId });
  };

  return <Checkbox checked={checked} onChange={onChange} />;
};

export default Completed;
