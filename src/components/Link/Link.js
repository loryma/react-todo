import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import classes from "./Link.module.css";

const Link = ({ children, activeFilter, filter, listId }) => {
  const dispatch = useContext(todosDispatch);

  const linkClasses = [
    classes.Link,
    activeFilter === filter ? classes.Active : ""
  ].join(" ");

  const onClick = () => {
    dispatch({ type: "CHANGE_FILTER", listId, filter });
  };
  return (
    <button onClick={onClick} className={linkClasses}>
      {children}
    </button>
  );
};

export default Link;
