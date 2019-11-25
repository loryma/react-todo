import React, { useContext } from "react";
import TodoList from "../../TodoTaskList/TodoTaskList";

import TodosContext from "../../../store/context/TodosContext";

const Home = () => {
  const { todos } = useContext(TodosContext);

  return <TodoList todos={todos} />;
};

export default Home;
