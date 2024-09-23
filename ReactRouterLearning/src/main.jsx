import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout/Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { myApiInfo } from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path : '/',
//       element : <Layout />,
//       children : [
//         {
//           path : '',
//           element : <Home />
//         },
//         {
//           path : 'About',
//           element : <About />
//         }
//       ]
//     }
//   ]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >
      <Route path='' element = {<Home />} />
      <Route path='About' element = {<About />} />
      <Route path='Contact' element = {<Contact />} />
      <Route path='User/:ID' element = {<User />} />
      <Route
      loader = {myApiInfo} 
      path='Github' 
      element = {<Github />} 
      />

    </Route>
  )
) 




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
