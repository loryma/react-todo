import React, { useContext, useState } from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";

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
      }
    }
  };

  return (
    // <form>
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
    // </form>
  );
};

export default Input;
