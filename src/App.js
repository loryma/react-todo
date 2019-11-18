import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Input from "./components/Input/Input";
import Home from "./containers/Page/Home/Home";

import TodosContext from "./store/context/TodosContext";
import TodosDispatch from "./store/context/TodosDispatchContext";

import todosReducer from "./store/reducer/TodosReducer";
import "./App.css";

const initialState = {
  todos: [],
  filter: "all"
};

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <BrowserRouter>
      <TodosDispatch.Provider value={dispatch}>
        <Input />
        <TodosContext.Provider value={todos}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </TodosContext.Provider>
      </TodosDispatch.Provider>
    </BrowserRouter>
  );
}

export default App;
