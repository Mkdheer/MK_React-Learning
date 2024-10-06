import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import ToggleBtn from './Components/ToggleBtn'
import { ThemeContextProvider } from './Theme/Theme'

function App() {
 
  const [ThemeMode, setThemeMode] = useState("light"); 
  
  const LightMode = ()=>{
    setThemeMode("light");
  }

  const DarkMode = ()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(ThemeMode);
  },[ThemeMode])

  return (
    
      <ThemeContextProvider value={{ThemeMode, LightMode, DarkMode}}>
          <div>
            <ToggleBtn/>
            <Card />
          </div>
      </ThemeContextProvider>
    
  )
}

export default App
