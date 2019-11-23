import React from "react";
import Footer from "../../components/Footer/Footer";
import CheckedMenu from "../../components/CheckedMenu/CheckedMenu";
import Input from "../../components/Input/Input";
import TodoTaskList from "../TodoTaskList/TodoTaskList";

const TodoContainer = ({ todos, listId, title, filter }) => {
  return (
    <div>
      <Input listId={listId} />
      <TodoTaskList todos={todos} filter={filter} listId={listId} />
      <CheckedMenu listId={listId} />
      <Footer listId={listId} activeFilter={filter} />
    </div>
  );
};

export default TodoContainer;
