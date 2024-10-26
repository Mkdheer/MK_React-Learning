// import React from 'react'

import React, { useContext } from 'react'


export const ToDoContext = React.createContext(
    {
        toDos : {
                    id:1,
                    toDoText : "",
                    toDoStatus : false
                },
        addToDo : () => {},
        deleteToDo : () => {},
        updateToDo : () => {},
        statusCheck : () => {}
    }
)

export const ToDoProvider =  ToDoContext.Provider

export const useMyToDos = () => {
    return useContext(ToDoContext)
}
