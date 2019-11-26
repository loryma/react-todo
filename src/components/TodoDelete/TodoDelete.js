import React, { useContext } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";

import Delete from "../Delete/Delete";

const TodoDelete = ({ id, listId }) => {
  const dispatch = useContext(todosDispatch);

  const onDeleteClick = () => {
    dispatch({ type: "deleteTodo", id, listId });
  };
  return <Delete onDeleteClick={onDeleteClick} />;
};

export default TodoDelete;
