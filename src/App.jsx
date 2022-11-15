import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'


function App() {
 

  return (
    <>

   <Routes>
    
    <Route path='/' element={<Home/>}/>
     {/* <Route path='/pageone' element={<PageOne/>}/>
     <Route path='/pagetwo/:id' element={<PageTwo/>}/>
     <Route path='/pageThree/' element={<PageLayout/>}>
      <Route index element={<PageList/>}/>
      <Route path=':id' element={<PageThree/>}/>  
      <Route path='new' element={<NewPage/>}/>
     </Route> */}
     <Route path='*' element={<NotFoundPage/>}/>
   </Routes>
   </>
  )
}

export default App
