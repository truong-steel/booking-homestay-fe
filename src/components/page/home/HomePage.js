import React from 'react'
import './HomePage.css'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Featured from '../featured/Featured'
import PropertyList from '../propertyList/PropertyList'
import FeaturedProperties from '../featuredProperties/FeaturedProperties'
import MailList from '../mailList/MailList'
import Footer from '../footer/Footer'
import { useLocation, useNavigate } from 'react-router-dom'

function HomePage() {
  const location = useLocation()
  const message = location.state && location.state.message
  const currentUser = localStorage.getItem('userId')
  const navigate = useNavigate()

  return (
    <section>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <h1 className='homeTitle' onClick={() => navigate('/homestays')}>Browse all homestays</h1>
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