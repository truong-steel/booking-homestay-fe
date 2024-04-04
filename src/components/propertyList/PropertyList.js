import React from 'react'
import './PropertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className='pListItem'>
            <img src='https://www.googleapis.com/download/storage/v1/b/tourcdn/o/photos%2FMQDX8170V6_%2Ftmp%2Fplaytemp6913687968683672931%2FmultipartBody3185419425175880700asTemporaryFile?generation=1586803211156597&alt=media' 
            alt=''
            className='pListImg'/>
            <div className='pListTitles'>
                <h1>Homestays</h1>
                <h2>234 Rooms</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://bcdhouse.vn/wp-content/uploads/2022/07/Thiet-ke-chua-co-ten-52.png' alt=''className='pListImg'/>
            <div className='pListTitles'>
                <h1>Cabins</h1>
                <h2>50 Rooms</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://caimepgroup.com/upload/images/container-homestay-1.jpg' alt=''className='pListImg'/>
            <div className='pListTitles'>
                <h1>Containers</h1>
                <h2>18 Rooms</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/42/ec/b1/lakeview-villa-homestay.jpg?w=700&h=-1&s=1' alt=''className='pListImg'/>
            <div className='pListTitles'>
                <h1>Villas</h1>
                <h2>18 Rooms</h2>
            </div>
        </div>
        <div className='pListItem'>
            <img src='https://khudothixanhvn.com/wp-content/uploads/2023/03/cho-thue-can-ho-homestay-studio-sp-1116-sky-oasis-ecopark-banner.jpg' alt=''className='pListImg'/>
            <div className='pListTitles'>
                <h1>Studio</h1>
                <h2>18 Rooms</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList