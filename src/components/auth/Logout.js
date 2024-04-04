import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import './Logout.css'

export const Logout = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.handleLogout()
        navigate('/',{state : { message : " You have been logout!"} })
    }
  

  return (
    <>
        
        <Link className="profileText" to={"/profile"}>
          Profile
        </Link>
      
      <button className="dropdown-item" onClick={handleLogout}>
        Logout
      </button>
    </>
  )
}
