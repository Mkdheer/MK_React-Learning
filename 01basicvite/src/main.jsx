import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const apple = "Chcuhu chichi";
function Appp() {
  return (
    <>
      <h1>This is in the Vite Okay In Line {apple}</h1>
    </>
  ) 
}

const newElement = {
  type : 'h1',
  
}

const anotherElement = (
  <a href="https://www.amazon.com" target='_self' >New Link</a>
)
 
const reactElement = React.createElement   (
  'a',
  {
      href : 'https://www.swiggy.com',
      target : '_self' 
  },
  'Open Book Not FacebooK Okay chcha ajgfag',
  apple
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
)
