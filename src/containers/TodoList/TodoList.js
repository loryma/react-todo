import React from "react";
import TodoItem from "../../components/TodoItem/TodoItem";

const TodoList = ({ todos }) => {
  const List = todos.map(todo => <TodoItem key={todo.id} todo={todo} />);
  return <div>{List}</div>;
};

export default TodoList;
