import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import Checkbox from "../Checkbox/Checkbox";
import classes from "./Completed.module.css";

const Completed = ({ checked, id }) => {
  const dispatch = useContext(todosDispatch);

  const onChange = () => {
    dispatch({ type: "toggleCompleted", id: id });
  };

  return <Checkbox checked={checked} onChange={onChange} />;
};

export default Completed;
