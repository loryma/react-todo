function newListReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CREATE_LIST":
      return !state;
    default:
      return state;
  }
}

export default newListReducer;
