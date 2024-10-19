import { useState } from 'react'
import './App.css'
import { ToDoProvider } from './Context/ToDoContext'

function App() {

  const[toDos, setToDos] = useState([])

  addToDo = (toDoText) => {
    setToDos(
        (prevToDo) => [...prevToDo, {id : Date.now(), ...toDoText}]
    )
  }

  deleteToDo = (id) => {
    setToDos(
      (prevToDo) => (prevToDo.filter((toDoIdv) => toDoIdv.id !== id))
    )
  }
  
  updateToDo = (id, toDoText) =>{
    setToDos(
      (prevToDo) => (prevToDo.map((prev) => prev.id === id ? toDoText : prev))
    )
  }

  statusCheck = (id) => {
    setToDos(
      (prevToDo) => (prevToDo.map((prev) => (prev.id === id ? {...prev, toDoStatus : !prev.toDoStatus} : prev)))
    )
  }


  return (
    <ToDoProvider value={{toDos, addToDo, deleteToDo, updateToDo, statusCheck}}>
      <h1>Hiii I am Khadeer</h1>
    </ToDoProvider>
  )
}

export default App
