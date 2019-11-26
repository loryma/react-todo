import React, { useState } from "react";

import classes from "./Input.module.css";

const Input = ({ onFormSubmit, placeholder }) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    let newTodo = e.target.value;

    setValue(newTodo.slice(0, 30));
  };

  const onSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      onFormSubmit(value);
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
        placeholder={placeholder}
      />
      <button className={classes.Submit} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Input;
