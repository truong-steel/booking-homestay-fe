import React from 'react'
import './Featured.css'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../api/useFetch'

const Featured = () => {
    const navigate = useNavigate()
    const { data , loading , error} = useFetch(
        '/homestays/all-address?homestayAddress='
    )
  return (
    <div className='featured'>
        { loading ? (
            'Loading . . .'
        ) : (
            <>
                <div className='featuredItem'>
            <img 
            src={process.env.PUBLIC_URL + '/hanoi.jpg'} alt="hanoi"
            className='featuredImg' 
            />
            <div className='featuredTitles'>
                <h1>Ha Noi</h1>
                <h2>{data[0]} properties </h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img 
            src={process.env.PUBLIC_URL + '/danang.jpg'} alt="hanoi"
            className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Da Nang</h1>
                <h2>{data[1]} Properties</h2>
            </div>
        </div>
        <div className='featuredItem'>
            <img 
            src='https://tphcm.dangcongsan.vn/DATA/72/IMAGES/2023/11/tao-da-de-tphcm-phat-trien-thanh-do-thi-thong-minh1517188897.jpg'
            alt=''
            className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Ho Chi Minh City</h1>
                <h2>{data[2]} Properties</h2>
            </div>
        </div>
            </>
        )

        }
        
    </div>
  )
}

export default Featured