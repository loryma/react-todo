import React, { useContext } from "react";
import TodoList from "../../TodoTaskList/TodoTaskList";

import TodosContext from "../../../store/context/TodosContext";

const Active = () => {
  const { todos } = useContext(TodosContext);
  const activeTodos = todos.filter(el => !el.completed);

  return <TodoList todos={activeTodos} />;
};

export default Active;
