import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { getAllHomestays } from '../api/Api'
import HomestayCard from './HomestayCard'
import { HomestayFilter } from '../common/HomestayFilter'
import {HomestayPage} from '../common/HomestayPage'


const Homestay = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [homestayPerPage] = useState(5)
    const [fitleredData, setFilteredData] = useState([{ id: "" }])

    useEffect(() => {
        setIsLoading(true)
        getAllHomestays().then((data) => {
            setData(data)
            setFilteredData(data)
            setIsLoading(false)
        }).catch((error) => {
            setError(error.message)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <div>Loading ...</div>
    }

    if (error) {
        return <div className='text-danger'>{error}</div>
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const totalPages = Math.ceil(fitleredData.length / homestayPerPage)
    const renderHomestays = () => {
        const startIndex = (currentPage - 1) * homestayPerPage
        const endIndex = startIndex + homestayPerPage
        return fitleredData.slice(startIndex, endIndex).map((homestay) => <HomestayCard key={homestay.id} homestay={homestay} />)
    }


  return (
    <Container>
        <div className='homestayContainer'>
        {/* <h1 className='text-center'>Find your next stay</h1>  */}
        <h4 className='text-center'>Search low prices on homestays, cabins , villas and much more...</h4><br />
        <Row>
                <Col md={6} className='mb-3 mb-md-0'>
                    <HomestayFilter data={data} setFilterData={setFilteredData} />
                </Col>
            </Row>
            <Row>
                {renderHomestays()}
            </Row>
            <Row>
                <Col md={6} className='d-flex align-items-center justify-content-end'>
                    <HomestayPage currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                </Col>
            </Row>
    </div>
    </Container>
    
  )
}

export default Homestay