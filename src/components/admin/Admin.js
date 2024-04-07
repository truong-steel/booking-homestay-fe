import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {

  return (
    <section>
        <br/>
        <h2>Welcome to Admin Panel </h2>
        <hr/>
        <Link to={'/accounts'}>Manage Accounts</Link>
        <br/>
        <Link to={'/reviews'}>Manage Reviews</Link>
    </section>
  )
}

export default Admin