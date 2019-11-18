import React, { useContext } from "react";
import TodoList from "../../TodoList/TodoList";

import TodosContext from "../../../store/context/TodosContext";

const Home = () => {
  const { todos } = useContext(TodosContext);
  console.log(todos);
  return <TodoList todos={todos} />;
};

export default Home;
