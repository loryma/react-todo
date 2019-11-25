import React, { useContext} from "react";
import todosDispatch from "../../store/context/TodosDispatchContext";
import Input from '../Input/Input'

const TodoInput = ({listId}) => {
    const dispatch = useContext(todosDispatch);

    const onSubmit = value => {
        dispatch({ type: "addTodo", text: value, listId });
    };

    return (
        <div>
            <Input onFormSubmit={onSubmit} placeholder="Insert todo item..." />
        </div>
    )
}

export default TodoInput;
