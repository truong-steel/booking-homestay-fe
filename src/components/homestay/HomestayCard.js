import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from 'react-bootstrap'
import Homestay from './Homestay'
import { Link } from 'react-router-dom'

const HomestayCard = ({homestay}) => {

  return (
    <Col className='mb-4' key={homestay.id} xs = {12}>
        <Card>
            <CardBody className='d-flex flex-wrap align-items-center'>
                <div className='flex-shrink-0 mr-3 mb-3 mb-md-0'>

                    // View list room
                <Link to={`/book-room/${homestay.id}`} className='btn btn-hotel btn-sm'>
                    <CardImg variant='top' src={`data:image/*;base64, ${homestay.homestayImage}`} alt='Homestay photo' 
                    style={{width:'100%', maxWidth: '200px', height: 'auto'}}/>
                    </Link>
                </div>
                <div className='flex-grow-1 ml-3 px-5'>
                    <CardTitle className='hotel-color'>{homestay.homestayAdress}</CardTitle>
                    <CardTitle className='hotel-color'>${homestay.homestayName}</CardTitle>
                    <CardText>Hotel is part of Booking Holdings Inc., the world leader in online travel & related services.</CardText>
                </div>
                <div className='flex-shrink-0 mt-3'>

                // View list room
                    <Link to={`/book-room/${homestay.id}`} className='btn btn-hotel btn-sm'>
                        View Details
                    </Link>
                </div>
            </CardBody>
        </Card>
    </Col>  
  )
}

export default HomestayCard