import React, { useContext, useState } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";

import classes from "./Input.module.css";

const Input = () => {
  const dispatch = useContext(todosDispatch);
  const [value, setValue] = useState("");

  const onChange = e => {
    let newTodo = e.target.value;

    setValue(newTodo);
  };

  const onKeyDown = e => {
    if (e.key === "Enter") {
      if (value.trim()) {
        dispatch({ type: "addTodo", text: value });
        setValue("");
      }
    }
  };

  return (
    // <form>
    <input
      className={classes.Input}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Insert todo item..."
    />
    // </form>
  );
};

export default Input;
