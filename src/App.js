import React, { useReducer } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Input from "./components/Input/Input";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Page/Home/Home";
import Active from "./containers/Page/Active/Active";
import Completed from "./containers/Page/Completed/Completed";

import TodosContext from "./store/context/TodosContext";
import TodosDispatch from "./store/context/TodosDispatchContext";

import todosReducer from "./store/reducer/TodosReducer";
import "./App.css";

const initialState = {
  todos: []
};

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <div className="App">
      <BrowserRouter>
        <TodosDispatch.Provider value={dispatch}>
          <Input />
          <TodosContext.Provider value={todos}>
            <Switch>
              <Route path="/active">
                <Active />
              </Route>
              <Route path="/completed">
                <Completed />
              </Route>
              <Route>
                <Home />
              </Route>
            </Switch>
            <Footer />
          </TodosContext.Provider>
        </TodosDispatch.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
