import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faCalendar, faCalendarDays, faCar, faHouse, faMotorcycle, faPerson, faPlane, faSearch, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { AuthContext } from '../../auth/AuthProvider'

const Header = ({type}) => {
    
    const [destination , setDestination] = useState('')
    const [openDate , setOpenDate] = useState(false)
    const [openRegister , setOpenRegister] = useState(false)
    const showRegister = () => {setOpenRegister(true)}
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions , setOpenOptions] = useState(false)
      const [options , setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1
      })

      const navigate = useNavigate()
      const {user} = useContext(AuthContext)

      const handleOption = (name , operation) => {
        setOptions(prev => {return{
            ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1 
        }})
      }
      const handleSearch = () => {
        navigate('/homestays', {state:{destination,date,options}})
      }
      const isLoggedIn = localStorage.getItem('token')
      const currentUser = localStorage.getItem('userId')
  return (
    <div className='header'>
        <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
        <div className='headerList'>
            <div className='headerListItem active' onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faHouse}  />
            <span>Home</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi Service</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faMotorcycle} />
            <span>Motobike Rentals</span>
            </div>
            <div className='headerListItem' onClick={() => navigate('/all-homestays')}>
            <FontAwesomeIcon icon={faBed} />
            <span>Homestays</span>
            </div>
        </div>
        { type !== 'list' && 
        <>
        { isLoggedIn ? (
            <>
        <h3> Welcome {currentUser} </h3>
        <h4>Let's find your place !</h4>
            </>
         ) : (
            <>
            <h1 className='headerTitle'>Looking for something private ?</h1>
            <h2> Sign in and start booking now ! </h2>
            <br/>
            <button className='headerBtn'
            onClick={() => navigate('/register')}> Sign In / Register 
            </button>
            </>  )
        }
        
        
        <div className='headerSearch'>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                <input type='text' placeholder='Where are you going ?' 
                className='headerSearchInput'
                onChange={e => setDestination(e.target.value)}
                />
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>
                    {`${format(date[0].startDate,'MM/dd/yyyy')} 
                to ${format(date[0].endDate,'MM/dd/yyyy')} `}</span>
                {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
            minDate={new Date()}
                />}
            
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult(s) 
                - ${options.children} children(s)
                - ${options.room} room(s) `}</span>
                { openOptions && <div className='options'>
                    <div className='optionItem'>
                        <span className='optionText'>Adult</span>
                        <div className='optionCounter'>
                        <button className='optionCounterButton'onClick={() => handleOption('adult','i')}>+</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button disabled = {options.adult <= 1} className='optionCounterButton'onClick={() => handleOption('adult','d')}>-</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Children</span>
                        <div className='optionCounter'>
                        <button className='optionCounterButton'onClick={() => handleOption('children','i')}>+</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button
                         disabled = {options.children <= 0} 
                         className='optionCounterButton'
                         onClick={() => handleOption('children','d')}>-</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Room</span>
                        <div className='optionCounter'>
                        <button className='optionCounterButton'onClick={() => handleOption('room','i')}>+</button>
                        <span className='optionCounterNumber'>{options.room}</span>
                        <button disabled = {options.room <= 1} className='optionCounterButton'onClick={() => handleOption('room','d')}>-</button>
                        </div>
                    </div>
                </div> }
            </div>
            <div className='headerSearchItem'>
                <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>

            </div>
        </div> </> }
        </div>
        </div>
  )
}

export default Header