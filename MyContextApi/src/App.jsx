import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'

function App() {

  return (
    <>
      <UserContextProvider>
        <div>My name is Khadeer and we are learning Context API course</div>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
