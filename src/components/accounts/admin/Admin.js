import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../page/navbar/Navbar'

const Admin = () => {

  return (
    <section>
      <Navbar/>
        <br/>
        <h2>Welcome to Admin Panel </h2>
        <hr/>
        <Link to={'/'}>Home</Link>
        <br/>
        <Link to={'/accounts'}>Manage Accounts</Link>
        <br/>
        <Link to={'/reviews'}>Manage Reviews</Link>
    </section>
  )
}

export default Admin