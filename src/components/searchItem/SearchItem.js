import React from 'react'
import './SearchItem.css'
import { Link, useNavigate } from 'react-router-dom'

const SearchItem = ({item}) => {
    const navigate = useNavigate()
  return (
    <div className='searchItem'>
        <img src={item.photos[0]}
        alt=''
        className='siImg'
        />
        <div className='siDesc'>
            <h1 className='siTitle' 
            onClick={() => navigate('/homestays/:id')
            }>{item.name}</h1>
            <span className='siDistance'>{item.distance} from center</span>
            <span className='siTaxiOption'>Free airport taxi</span>
            <span className='siSubtitle'>Apartment with Air conditioning</span>
            <span className='siFeatures'>2 bedroom - 1 bathroom </span>
            <span className='siCancelOp'>Free Cancellation</span>
            <span className='siCancelOpSubtitle'>
                You can cancel later , so lock in this best deal today !
            </span>
        </div>
        <div className='searchDetail'>
            <div className='siRating'>
                <span>Good</span>
                <button>{item.rating}</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>{item.price}</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <Link to={`/homestays/${item._id}`}>
                <button className="siCheckButton">See availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem