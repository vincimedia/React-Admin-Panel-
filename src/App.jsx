import React from 'react'
import Home from "./pages/home/Home"
import List from './pages/list/List'
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import New from './pages/new/New'
import './App.css'


const App = () => {
  return (
    <div className='App'>
     <Home />
     <List />
     <Login/>
     <Single />
     <New />
    </div>
  )
}

export default App

 