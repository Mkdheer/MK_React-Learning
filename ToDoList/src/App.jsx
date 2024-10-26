import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './Context/ToDoContext'
import ToDoForm from './Components/ToDoForm'
import ToDoList from './Components/ToDoList'


function App() {

  const[toDos, setToDos] = useState([])

  
  const addToDo = (toDo) => {
    setToDos(
        (prevToDo) => [...prevToDo, {id : Date.now(), ...toDo}]
    )
  }

  const deleteToDo = (id) => {
    setToDos(
      (prevToDo) => (prevToDo.filter((toDoIdv) => toDoIdv.id !== id))
    )
  }
  
  const updateToDo = (id, toDo) =>{
    setToDos(
      (prevToDo) => (prevToDo.map((prev) => prev.id === id ? toDo : prev))
    )
  }

  const statusCheck = (id) => {
    setToDos(
      (prevToDo) => (prevToDo.map((prev) => (prev.id === id ? {...prev, toDoStatus : !prev.toDoStatus} : prev)))
    )
  }

  useEffect(
    ()=>{
      const toDos = JSON.parse(localStorage.getItem("toDos"))
      if(toDos && toDos.length > 0) setToDos(toDos)
    },[]
  )
  
  useEffect(
    ()=>{
      localStorage.setItem("toDos",JSON.stringify(toDos))
    },[toDos]
  )


  return (
    <ToDoProvider value={{toDos, addToDo, deleteToDo, updateToDo, statusCheck}}>
     <div className='w-full'>
        <h2 className='font-bold text-3xl mb-10'>Welcome to my ToDO List Application</h2>
          <div className='flex flex-col gap-10'>
            <div className=''>
              <ToDoForm />
            </div>
            <div className=''>
              {
                toDos.map((toDo)=>
                  (
                    <div key={toDo.id} className='mb-5'>
                      <ToDoList  toDo = {toDo} />
                    </div>
                  )
                          )
              }
            </div>
          </div>
     </div>
         
    </ToDoProvider>
    
  )
}

export default App
