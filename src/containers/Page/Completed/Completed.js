import React, { useContext } from "react";
import TodoList from "../../TodoList/TodoList";

import TodosContext from "../../../store/context/TodosContext";

const Completed = () => {
  const { todos } = useContext(TodosContext);
  const completedTodos = todos.filter(el => el.completed);

  return <TodoList todos={completedTodos} />;
};

export default Completed;
