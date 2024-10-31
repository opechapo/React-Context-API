import { useState } from 'react'
import Profile from './component/Profile'
import Login from './component/Login'
import UserContextProvider from './context/UserContextProvider'
import './App.css'


function App() {
  
  return (
    <UserContextProvider>
      <h1>React ContextApi</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  ) 
}

export default App