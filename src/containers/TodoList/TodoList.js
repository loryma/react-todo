import React from "react";
import TodoContainer from "../TodoContainer/TodoContainer";

const TodoList = ({ todos }) => {
  const todoLists = todos.map(list => (
    <TodoContainer
      key={list.id}
      listId={list.id}
      todos={list.todos}
      title={list.title}
      filter={list.filter}
    />
  ));

  return todoLists;
};

export default TodoList;
