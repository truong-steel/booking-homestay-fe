import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  HomePage  from './components/home/HomePage'
import './App.css'
import List from './components/list/List'
import Homestay from './components/homestay/Homestay'
import Register from './components/register/Register'
import Login from './components/login/Login'
import { AuthProvider } from './components/auth/AuthProvider'


function App() {
  return (
    <AuthProvider>
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/homestays' element={<List/>}/>
        <Route path='/homestays/:id' element={<Homestay/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    
    </AuthProvider>
  )
}

export default App