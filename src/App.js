import React, { useReducer } from "react";
import TodosDispatch from "./store/context/TodosDispatchContext";

import todosReducer from "./store/reducer/TodosReducer";
import "./App.css";
import TodoList from "./containers/TodoList/TodoList";

const initialState = [];

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <div className="App">
      <h1 className="App__header">Todo App</h1>

      <TodosDispatch.Provider value={dispatch}>
        {todos.length > 0 && <TodoList todos={todos} />}
      </TodosDispatch.Provider>
    </div>
  );
}

export default App;
