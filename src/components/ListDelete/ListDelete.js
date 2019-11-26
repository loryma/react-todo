import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";

import Delete from "../Delete/Delete";
import classes from "./ListDelete.module.css";

const ListDelete = ({ listId }) => {
  const dispatch = useContext(todosDispatch);

  const onDeleteClick = () => {
    dispatch({ type: "DELETE_LIST", listId });
  };
  return (
    <div className={classes.ListDelete}>
      <Delete onDeleteClick={onDeleteClick} color="White" />{" "}
    </div>
  );
};

export default ListDelete;
