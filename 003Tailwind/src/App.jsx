import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  let arr = ["Khadeer", "dsj"];

  let Obj = {
    Name : "Khadeer",
    Age : 23,
    Sex : "Male"
  };

  return (
    <>
      <h1
        className='bg-green-800 text-amber-300 p-3 rounded-xl mb-5'  
      >Hii! we are starting Tailwind Css Today</h1>
      <Card Name = 'Khadeer' array = {arr} MyObj = {Obj}/> <br />
      <Card />
    </>
  )
}

export default App
