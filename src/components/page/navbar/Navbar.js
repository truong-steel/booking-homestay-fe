import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../../auth/AuthProvider'
import { Logout } from '../../auth/Logout'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const message = location.state && location.state.message
  const currentUser =   localStorage.getItem('userId')

  const [showAccount, setShowAccount] = useState(false)

  const handleAccountClick = () => {
      setShowAccount(!showAccount)
  }


  const isLoggedIn = localStorage.getItem("token")
	const userRole = localStorage.getItem("userRole")

  return (
    
        <nav className='navbar navbar-expand-lg bg-body-tertiary px-5 shadow sticky-top'>
            <div className='container-fluid'>
                <Link to={"/"} className='navbar-brand'>
                    <span className='hotel-color'> Homestay Booking </span>
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarScroll' aria-controls='navbarScroll'
                    aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarScroll'>
                    <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-srcoll'>
            
                        {isLoggedIn && userRole === "ROLE_ADMIN" && (
                            <li className='nav-item'>
                                <NavLink to={"/admin"} className='nav-link' aria-current='page'>Admin</NavLink>
                            </li>
                        )}
                        {isLoggedIn && userRole === "ROLE_MANAGER" && (
                            <li className='nav-item'>
                                <NavLink to={"/manager"} className='nav-link' aria-current='page'>Manager</NavLink>
                            </li>
                        )}

                    </ul>
                    <ul className='d-flex navbar-nav'>
                    <li className='nav-item'>
                            <NavLink className='nav-link' to={"/manager-register"}>Become A Host</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to={"/find-booking"}>Find My Booking</NavLink>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
                                href='' role='button' data-bs-toggle='dropdown' aria-expanded='false' onClick={handleAccountClick}>{""}My Account</a>
                            <ul className={`dropdown-menu ${showAccount ? "show" : ""}`} aria-labelledby='navbarDropdown'>
                            {isLoggedIn ? (
              
                                <>
                                <li className='nav-item'>
                                  <NavLink to={'/profile'} className='nav-link' aria-current='page'>{currentUser}</NavLink>
                                  
                                  </li>
                                <li><Logout /></li>
                                </>
                                		            
								) : (
									<li>
										<Link className="dropdown-item" to={"/login"}>
											Login
										</Link>
									</li>
								)}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    
  )
}

export default Navbar