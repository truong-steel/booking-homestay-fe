import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  HomePage  from './components/page/home/HomePage'
import './App.css'
import List from './components/page/list/List'
import Homestay from './components/page/homestay/Homestay'
import Register from './components/accounts/register/Register'
import ManagerReg from './components/accounts/register/ManagerReg'
import Login from './components/accounts/Login'
import { AuthProvider } from './components/auth/AuthProvider'
import ExistingRoom from './components/room/ExistingRoom'
import AddRoom from './components/room/AddRoom'
import EditRoom from './components/room/EditRoom'
import RoomListing from './components/room/RoomListing'
import Profile from './components/auth/Profile'
import Admin from './components/accounts/admin/Admin'
import { Logout } from './components/auth/Logout'
import Manager from './components/accounts/manager/Manager'

function App() {
  return (
    <AuthProvider>
    
      <Routes>
        <Route path='/' element={<HomePage/>}/>

        <Route path='/homestays' element={<List/>}/>
        <Route path='/homestays/:id' element={<Homestay/>}/>
        

        <Route path='/rooms' element = {<ExistingRoom/>}/>
        <Route path='/add-room' element = {<AddRoom/>} />
        <Route path='/edit-room/:roomId' element = {<EditRoom/>} />
        <Route path='/all-rooms' element ={<RoomListing/>} />



        <Route path='/register' element={<Register/>}/>
        <Route path='/manager-register' element={<ManagerReg/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path = '/' element = {<Logout/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/manager' element={<Manager/>}/>
        
      </Routes>
    
    </AuthProvider>
  )
}

export default App