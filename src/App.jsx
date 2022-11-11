import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PageOne from './pages/PageOne'

function App() {
  // const router=createBrowserRouter([{path:'/',element:<Home/>}]) This is one way
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Home />}>
      {/* <Route path='/pageone' element={<PageOne/>}/> */}
    </Route>
  ))

  return (
    <RouterProvider router={router} />

  )
}

export default App
