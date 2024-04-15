import React, { useEffect, useState } from 'react'
import { getAllHomestayAddress } from '../api/Api';



const HomestayAddressSelector = ({handleHomestayInputChange , newHomestay}) => {
    const [homestayAddress, setHomestayAddress] = useState([""]);
    const [showHomestayAddress, setShowHomestayAddress] = useState(false);
    const [newHomestayAddress, setNewHomestayAddress] = useState("");

    useEffect(() => {
        getAllHomestayAddress.then((data) => {
            setHomestayAddress(data)
        })
    }, [])

    const handleNewHomestayChange = (e) => {
        setNewHomestayAddress(e.target.value);
    }

    const handleAddNewHomestayAddress = () => {
        if (newHomestayAddress !== "") {
            setHomestayAddress([...homestayAddress, newHomestayAddress])
            setNewHomestayAddress("")
            setShowHomestayAddress(false)
        }
    }

  return (
    <>
        {homestayAddress.length >= 0 && (
            <div>
                <select class="form-select" name="homestayAddress" id="roomType" value={newHomestay.homestayAddress} onChange={(e) => {
                        if (e.target.value === "Add New") {
                            setShowHomestayAddress(true)
                        } else {
                            handleHomestayInputChange(e)
                        }
                }}>
                    <option value={""}>Select a homestay address</option>
                        <option value={"Add New"}>Add New</option>
                        {homestayAddress.map((address, index) => (
                            <option key={index} value={address}>
                                {type}
                            </option>
                        ))}
                </select>
                <br/>
                {showHomestayAddress && (
                        <div className='input-group'>
                            <input className='form-control' type="text" required placeholder='Enter a new address'
                                onChange={handleNewHomestayChange} />
                            <button className='btn btn-hotel' type='button' onClick={handleAddNewHomestayAddress}>Add</button>
                        </div>
                    )}

            </div>
        )}
        
    </>
    
  )
}

export default RoomTypeSelector