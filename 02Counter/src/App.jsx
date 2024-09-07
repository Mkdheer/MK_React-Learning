import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let[score, setScore] = useState(0);

let Addition = () => {
  if(score < 5) setScore(score+1);
  else score = 20;
}

let Subtraction = () =>{
  if(score != 0) setScore(score-1);
  else score = 0;
}


  return(
    <>
    <h1>Score value okay : {score}</h1>
    <button
      onClick={Addition}
    >Add Value {score}</button>
    <br />
    <button
      onClick = {Subtraction}
    >Reduce Value {score}</button>
    </>
  )
}

export default App
