import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../page/navbar/Navbar'
import Footer from '../../page/footer/Footer'
import MailList from '../../page/mailList/MailList'
import './Manager.css'
import ExistingRoom from '../../room/ExistingRoom'

const Manager = () => {
  const [homestays , setHomestays] = useState([])

  return (
    <>
    <section>
      <Navbar/>
        <br/>
        <h2 className='text'>Welcome to Manager Panel </h2>
        <hr/>
        <ExistingRoom/>
        </section>
    <MailList/>
        <Footer/>
    </>
    
  )
}

export default Manager