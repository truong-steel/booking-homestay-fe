import React, { useContext, useState } from 'react'
import './Booking.css'
import useFetch from '../api/useFetch'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Booking = ({setOpen , roomId}) => {
    const [selectedRooms , setSelectedRooms] = useState([])
    const {data , loading , error} = useFetch(`/homestays/rooms/${roomId}`)
    const {dates} = useContext()

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        const date = new Date(start.getTime());
    
        const dates = [];
    
        while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate() + 1);
        }
    
        return dates;
      }

      const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

      const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some((date) =>
          alldates.includes(new Date(date).getTime())
        );

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
          checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => item !== value)
        );
      };

      const navigate = useNavigate();

      const handleClick = async () => {
        try {
          await Promise.all(
            selectedRooms.map((roomId) => {
              const res = axios.put(`/rooms/availability/${roomId}`, {
                dates: alldates,
              });
              return res.data;
            })
          );
          setOpen(false);
          navigate("/");
        } catch (err) {}
      };

    

  return (
    <div className='booking'>
        <div className='bContainer'>
            <FontAwesomeIcon
            icon={faCircleXmark}
            className='bClose'
            onClick={() => setOpen(false)}
            />

            <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="bItem" key={item._id}>
            <div className="bItemInfo">
              <div className="bTitle">{item.title}</div>
              <div className="bDesc">{item.desc}</div>
              <div className="bMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="bPrice">{item.price}</div>
            </div>
            <div className="bSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="bButton">
          Reserve Now!
        </button>
        </div>
    </div>
  )
}

export default Booking