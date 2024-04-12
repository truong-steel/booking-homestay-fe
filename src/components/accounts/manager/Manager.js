import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../page/navbar/Navbar'
import Footer from '../../page/footer/Footer'
import MailList from '../../page/mailList/MailList'
import './Manager.css'

const Manager = () => {

  return (
    <>
    <section>
      <Navbar/>
        <br/>
        <h2 className='text'>Welcome to Manager Panel </h2>
        <hr/>
        <Link to={'/'}>Home</Link>
        <br/>
        <Link to={'/all-homestays'}>Your Homestays List</Link>
        </section>
    <MailList/>
        <Footer/>
    </>
    
  )
}

export default Manager