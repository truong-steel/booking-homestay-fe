import React, { useEffect, useState } from 'react'
import { Link, useParams , useNavigate } from 'react-router-dom';
import { getHomestayById, updateHomestay } from '../../api/Api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import './EditHomestay.css'



const EditHomestay = () => {
    const [homestay, setHomestay] = useState({
        image: null,
        address: "",
        name: ""
      })

    const [imagePreview, setImagePreview] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const {homestayId} = useParams()

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        setHomestay({ ...homestay, image: selectedImage })
        setImagePreview(URL.createObjectURL(selectedImage))
        console.log("Image", selectedImage);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setHomestay({ ...homestay, [name]: value })
      }

      useEffect(() => {
        const fetchHomestay = async () => {
            try {
              const homestayData = await getHomestayById(homestayId)
              setHomestay(homestayData)
              setImagePreview(homestayData.image)
            } catch (error) {
              console.error(error);
            }
          }
          fetchHomestay()
      }, {homestayId})

    const handleSubmit = async (e) => {
        e.preventDefault()
    try {
      const success = await updateHomestay(homestayId , homestay)
      if (success.status === 200) {
        setSuccessMessage("Homestay updated sucessfully!")
        const updatedHomestayData = await getHomestayById(homestayId)
        setHomestay(updatedHomestayData)
        setImagePreview(updatedHomestayData.image)
        setErrorMessage("")
      } else {
        setErrorMessage("Error updating room")
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message)
    }

    setTimeout(() => {
      setSuccessMessage("")
      setErrorMessage("")
    }, 3000)
    }
    const navigate = useNavigate()

  return (
    <div>
<div className='container mt-5 mb-5'>
    <h1 className='back-btn' onClick={() => {navigate('/all-homestays')}}><FontAwesomeIcon icon={faArrowLeftLong}/> Back </h1>
      <h3 className='text-center mb-5 mt-5'>Update Homestay</h3>
    <div className='row justify-content-center'>
        <div className='col-md-8 col-lg-6'>
            
            {successMessage && (
                <div className='alert alert-success' role='alert'>{successMessage}</div>
            )}

            {errorMessage && (
                <div className='alert alert-danger' role='alert'>{errorMessage}</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='homestayAddress' className='form-label hotel-color'>Homestay Address</label>
                    <input type="text" className='form-control' id='homestayAddress' name='homestayAddress' value={homestay.address} onChange={handleInputChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='homestayName' className='form-label hotel-color'>Homestay Name</label>
                    <input className='form-control' required id='homestayName' name='homestayName'
                    value={homestay.name} onChange={handleInputChange} type='text'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='image' className='form-label hotel-color'>Image</label>
                    <input type="file" id='image' name='image' className='form-control ' required
                    onChange={handleImageChange} />
                    {imagePreview && (
                        <img src={`${imagePreview}`} style={{maxWidth: '400px', maxHeight: '400px'}} className='mb-3' alt="Room Image" />
                    )}
                </div>
                <div className='d-grid gap-2 d-md-flex mt-2'>               
                    <button type='submit' className='btn btn-outline-success'> 
                       Update
                    </button>
                    <Link to={"/all-homestays"} className='btn btn-outline-danger ml-5'>Cancel</Link>
                </div>
            </form>
        </div>
    </div>
</div>
    </div>
    
  )
}

export default EditHomestay