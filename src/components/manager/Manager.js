import React from 'react'
import { Link } from 'react-router-dom'

const Manager = () => {

  return (
    <section>
        <br/>
        <h2>Welcome to Manager Panel </h2>
        <hr/>
        <Link to={'/'}>Home</Link>
        <br/>
        <Link to={'/rooms'}>Manage Room</Link>
        <br/>
        <Link to={'/bookings'}>Manage Bookings</Link>
    </section>
  )
}

export default Manager