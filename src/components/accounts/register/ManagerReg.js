import React, { useState } from 'react'
import './ManagerReg.css'
import { managerSignUp, signUp } from '../../api/Api';
import { Link } from 'react-router-dom';
import Navbar from '../../page/navbar/Navbar';
import MailList from '../../page/mailList/MailList';
import Footer from '../../page/footer/Footer';

const ManagerReg = () => {
  const [register , setRegister] = useState({
    email:"",
    password:"",
    fullName:"",
    phone:"",
    location:""
})
const [success, setSuccess] = useState(false);
const [errorMessage, setErrorMessage] = useState("")
const [successMessage, setSuccessMessage] = useState("")
const handleInPutChange = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value })
}

const handleSignUp = async (e) => {
    e.preventDefault()
    try {
        const result = await managerSignUp(register)
        setSuccessMessage(result)
        setErrorMessage("")
        setRegister({ email: '', password: '', fullName:'', phone: '',  location:'',})
        setSuccess(true);
    } catch (error) {
        setSuccessMessage("")
        setErrorMessage(`Error ${error.message}`)
    }
    setTimeout(() => {
        setErrorMessage("")
        setSuccessMessage("")
    }, 5000)
}
  return (
    <>
    { success ? (
        <section>
            {errorMessage && <p className='alert alert-danger'>{errorMessage}</p>}
            {successMessage && <p className='alert alert-success'>{successMessage}</p>}
            <div className='text-noti'>
            <h1>Register Success!</h1>
            <h2>You are homestay's owner now</h2>
            <p>
                <Link to={"/login"}>Sign In to Add Your Room</Link>
            </p>
            </div>
            
        </section>
    ) : ( 
        <section>
            <Navbar/>
        <div className='register'>
            <div className='registerContainer'>
                <h1 className='registerText'>Register to Become a host</h1>
            <div className='formLogin'>
                <label>Email :</label>
                <input
                type='email'
                placeholder='email'
                id='email'
                onChange={handleInPutChange}
                className='loginInput'
                required value={register.email}
                />
                <label>Password :</label>
                <input
              type="password"
              placeholder="password"
              id="password"
              onChange={handleInPutChange}
              className="loginInput"
              required value={register.password}
                />
                <label>Homestay Name :</label>
                <input
                type='text'
                placeholder='homestay name'
                id='fullName'
                onChange={handleInPutChange}
                className='loginInput'
                required value={register.fullName}
                />
                <label>Phone Number:</label>
                <input
                type='tel'
                placeholder='phone number'
                id='phone'
                onChange={handleInPutChange}
                className='loginInput'
                required value={register.phone}
                />
                <label>Location :</label>
                <input
                type='text'
                placeholder='location'
                id='location'
                onChange={handleInPutChange}
                className='loginInput'
                required value={register.location}
                />
                </div>
                <br/>
                
                 <button onClick={handleSignUp} type='submit' className="lButton">
              Sign Up
            </button>
            <br/>
            
                <p className='regText'>Already have an account ? <Link to={"/login"}>Sign In</Link></p>
                
            </div>
        </div>
        <MailList/>
        <Footer/>
            </section>
    )
    }
    </>
  )
}

export default ManagerReg