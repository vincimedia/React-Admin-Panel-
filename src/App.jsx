import React from 'react'
import Home from "./pages/home/Home"
import List from './pages/list/List'
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import New from './pages/new/New'
import './App.css'
import { Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/single' element={<Single />} />
      <Route path='/list' element={<List />} />
      <Route path='/login' element={<Login />} />
      <Route path='/new' element={<New />} />
    </Routes>
  )
}
export default App


 