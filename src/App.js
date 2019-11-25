import React, { useReducer } from "react";
import TodosDispatch from "./store/context/TodosDispatchContext";
import NewListContext from "./store/context/NewListContext";

import todosReducer from "./store/reducer/TodosReducer";
import newListReducer from "./store/reducer/newListReducer";
import "./App.css";
import TodoList from "./containers/TodoList/TodoList";
import NewList from "./components/NewList/NewList";
import TodoListInput from "./components/TodoListInput/TodoListInput";

const initialTodos = [
  {
    id: "dfsfs89435",
    title: "example list name",
    filter: "all",
    todos: [{ id: "sdkf748r8f", text: "milk", completed: false }]
  }
];

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  const [showNewList, dispatchShowNewList] = useReducer(newListReducer, false);

  return (
    <div className="App">
      <NewListContext.Provider value={dispatchShowNewList}>
        <div className="App__header">
          <h1 className="App__title">Todo App</h1>
          <NewList />
        </div>

        <TodosDispatch.Provider value={dispatch}>
          {showNewList && <TodoListInput />}
          {todos.length > 0 && <TodoList todos={todos} />}
        </TodosDispatch.Provider>
      </NewListContext.Provider>
    </div>
  );
}

export default App;
