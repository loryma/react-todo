import React, { useContext, useState } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";

import classes from "./Input.module.css";

const Input = ({ listId }) => {
  const dispatch = useContext(todosDispatch);
  const [value, setValue] = useState("");

  const onChange = e => {
    let newTodo = e.target.value;

    setValue(newTodo);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      dispatch({ type: "addTodo", text: value, listId });
      setValue("");
    }
  };

  return (
    <form onSubmit={onSubmit} className={classes.Form}>
      <input
        className={classes.Input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Insert todo item..."
      />
      <button className={classes.Submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Input;
