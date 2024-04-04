import React from 'react'
import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src='https://marketingdulich.net/wp-content/uploads/2020/09/Mega-view-homestay-sapa-twin-room-1.jpg'
        alt=''
        className='siImg'
        />
        <div className='siDesc'>
            <h1 className='siTitle'>West Lake Apartment</h1>
            <span className='siDistance'>4.1km from center</span>
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
                <button>4</button>
            </div>
            <div className='siDetailTexts'>
                <span className='siPrice'>$99</span>
                <span className='siTaxOp'>Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem