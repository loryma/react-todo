const uuid = require("uuid/v4");

function todosReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FILTER":
      const changeFilter = state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            filter: action.filter
          };
        }
        return list;
      });
      return [...changeFilter];
    case "ADD_LIST":
      let listId = uuid();
      return [
        ...state,
        { id: listId, filter: "all", title: action.title, todos: [] }
      ];

    case "DELETE_LIST":
      return state.filter(list => list.id !== action.listId);

    case "addTodo":
      const id = uuid();
      let appendedList = state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            todos: [...list.todos, { id, text: action.text, completed: false }]
          };
        }
        return list;
      });
      return [...appendedList];

    case "deleteTodo":
      const deleteTodo = state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            todos: list.todos.filter(todo => todo.id !== action.id)
          };
        }
        return list;
      });
      return [...deleteTodo];

    case "toggleCompleted":
      const toggleTodo = state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            todos: list.todos.map(todo => {
              if (todo.id === action.id) {
                return { ...todo, completed: !todo.completed };
              }
              return todo;
            })
          };
        }
        return list;
      });

      return [...toggleTodo];

    case "editTodo":
      const editTodo = state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            todos: list.todos.map(todo => {
              if (todo.id === action.id) {
                return { ...todo, text: action.text };
              }
              return todo;
            })
          };
        }
        return list;
      });

      return [...editTodo];
    case "clearCompleted":
      const activeTodos = state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            todos: list.todos.filter(todo => !todo.completed)
          };
        }
        return list;
      });

      return [...activeTodos];

    case "checkAll":
      const checkTodos = state.map(list => {
        if (list.id === action.listId) {
          return {
            ...list,
            todos: list.todos.map(todo => {
              if (action.check) {
                return todo.completed ? todo : { ...todo, completed: true };
              } else {
                return todo.completed ? { ...todo, completed: false } : todo;
              }
            })
          };
        }
        return list;
      });

      return [...checkTodos];

    default:
      return state;
  }
}

export default todosReducer;
