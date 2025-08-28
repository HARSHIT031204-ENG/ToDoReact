import react from "react"
import { createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [{
        id: 1,
        TodoMsg: " Todo Msg..",
        Completed: false
    }],

    AddTodo: (todo) => { },
    EditTodo: (id, todo) => { },
    DeleteTodo: (id) => { },
    ToggleCompleteTodo: (id) => { }
})


export const UseTodo = () => {
    return useContext(TodoContext)
}


export const TodoContextProvider = TodoContext.Provider
