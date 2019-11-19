const uuid = require("uuid/v4");

function todosReducer(state, action) {
  switch (action.type) {
    case "addTodo":
      const id = uuid();
      return {
        ...state,
        todos: [...state.todos, { id, text: action.text, completed: false }]
      };

    case "deleteTodo":
      const newList = state.todos.filter(todo => todo.id !== action.id);
      return { ...state, todos: [...newList] };

    case "toggleCompleted":
      const todoList = state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return { ...state, todos: [...todoList] };

    case "editTodo":
      const editedTodoList = state.todo.filter(todo => {
        if (todo.id === action.id) {
          return { ...todo, text: action.text };
        }
        return todo;
      });
      return { ...state, todos: [...editedTodoList] };

    default:
      return state;
  }
}

export default todosReducer;
