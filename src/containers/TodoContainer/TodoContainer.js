import React from "react";
import Footer from "../../components/Footer/Footer";
import CheckedMenu from "../../components/CheckedMenu/CheckedMenu";
import TodoListHeader from "../../components/TodoListHeader/TodoListHeader";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoTaskList from "../TodoTaskList/TodoTaskList";
import classes from "./TodoContainer.module.css";

const TodoContainer = ({ todos, listId, title, filter }) => {
  return (
    <div className={classes.TodoContainer}>
      <TodoListHeader title={title} listId={listId} />
      <div className={classes.Content}>
        <TodoInput listId={listId} />
        <TodoTaskList todos={todos} filter={filter} listId={listId} />

        {todos.length > 0 ? (
          <>
            <CheckedMenu listId={listId} todos={todos} />
            <Footer listId={listId} activeFilter={filter} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TodoContainer;
