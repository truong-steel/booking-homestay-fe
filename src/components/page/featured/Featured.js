import React from 'react'
import './Featured.css'
import { useNavigate } from 'react-router-dom'

const Featured = () => {
    const navigate = useNavigate()
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img 
            src={process.env.PUBLIC_URL + '/hanoi.jpg'} alt="hanoi"
            className='featuredImg' 
            />
            <div className='featuredTitles'>
                <h1>Ha Noi</h1>
                <h2>523 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img 
            src={process.env.PUBLIC_URL + '/danang.jpg'} alt="hanoi"
            className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Da Nang</h1>
                <h2>394 Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img 
            src='https://tphcm.dangcongsan.vn/DATA/72/IMAGES/2023/11/tao-da-de-tphcm-phat-trien-thanh-do-thi-thong-minh1517188897.jpg'
            alt=''
            className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Ho Chi Minh City</h1>
                <h2>709 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured