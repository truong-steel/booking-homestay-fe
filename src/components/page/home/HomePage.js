import React from 'react'
import './HomePage.css'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Featured from '../featured/Featured'
import PropertyList from '../propertyList/PropertyList'
import FeaturedProperties from '../featuredProperties/FeaturedProperties'
import MailList from '../mailList/MailList'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom'

function HomePage() {
  const location = useLocation()
  const message = location.state && location.state.message
  const currentUser = localStorage.getItem('userId')

  return (
    <section>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          <h1 className='homeTitle'>Browse by properties</h1>
          <PropertyList/>
          <h1 className='homeTitle'>Maybe you love it</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </section>
  )
}

export default HomePage