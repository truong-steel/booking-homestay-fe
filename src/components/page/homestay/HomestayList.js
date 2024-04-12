import React, { useEffect, useState } from 'react'
import { getAllHomestays } from '../../api/Api'

const HomestayList = () => {
    const [homestays , setHomestays] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllHomestays()
                setHomestays(res.data)
                setLoading(false)
            } catch (err) {
                console.error('Error fetching homestays list' , err)
            }
        }
        fetchData()
    } , [])

  return (
    <div>
        <h1>List of Homestays </h1>
        { loading ? (
            <>Loading . . .</>
        ) : (
            <ul>
                {homestays.map(homestay => (
                    <li key = {homestay.id}>
                        <p>{homestay.homestayName}</p>
                        <p>{homestay.homestayAddress}</p>
                        <p>{homestay.description}</p>
                    </li>
                ))}
            </ul>
        )

        }
    </div>
  )
}

export default HomestayList