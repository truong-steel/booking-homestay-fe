import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { Logout } from '../auth/Logout'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const message = location.state && location.state.message
  const currentUser =   localStorage.getItem('userId')

  const isLoggedIn = localStorage.getItem("token")
	const userRole = localStorage.getItem("userRole")

  return (
    <section>
    <div className='navbar'>
        <div className='navContainer'>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Checkin</span>
        </Link>
        { currentUser ? currentUser.userId : (
          <div className='navItems'>
          {/* <button className='navButton' onClick={() => navigate('/register') }>Register</button>
          <button className='navButton'onClick={() => navigate('/login') }>Login</button> */}
        </div>
        )
        }       
            {message && <p className='text'>{message}</p>}
            {currentUser && <h6 className='text'>You are logged in as {currentUser}</h6>}
          {
            isLoggedIn ? (
              <Logout/>
            ) : (
              <button className='navButton' onClick={() => navigate('/login')}>
                Login
              </button>
                
            )
          }
        </div>
        </div>
      </section>
  )
}

export default Navbar