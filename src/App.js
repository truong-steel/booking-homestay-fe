import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  HomePage  from './components/page/home/HomePage'
import './App.css'
import Register from './components/accounts/register/Register'
import ManagerReg from './components/accounts/register/ManagerReg'
import Login from './components/accounts/Login'
import { AuthProvider } from './components/auth/AuthProvider'
import Profile from './components/auth/Profile'
import Admin from './components/accounts/admin/Admin'
import { Logout } from './components/auth/Logout'
import Manager from './components/accounts/manager/Manager'
import AccountList from './components/accounts/accountList/AccountList'

function App() {
  return (
    <AuthProvider>
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/register' element={<Register/>}/>
        <Route path='/manager-register' element={<ManagerReg/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path = '/' element = {<Logout/>}/>

        <Route path='/profile' element={<Profile/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/manager' element={<Manager/>}/>
        <Route path = '/accounts' element = {<AccountList/>}/>
        
      </Routes>
    
    </AuthProvider>
  )
}

export default App