import React, { useState } from 'react'
import './Homestay.css'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import MailList from '../mailList/MailList'
import Footer from '../footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Homestay = () => {
  const [slideNumber , setSlideNumber] = useState(0)
  const [open , setOpen] = useState(false)
  const photos = [
    {
      src:'https://a0.muscache.com/im/pictures/miso/Hosting-814355236310428415/original/724afd24-d291-4478-8312-0d32bee21f1d.jpeg?im_w=1200'
    },
    {
      src : 'https://a0.muscache.com/im/pictures/miso/Hosting-814355236310428415/original/1e122645-4f0a-4b1f-bd03-fe9b97ae435d.jpeg?im_w=720'
    },
    {
      src : 'https://a0.muscache.com/im/pictures/miso/Hosting-814355236310428415/original/60ad953d-abc8-4465-a8cd-10cf1a12bb51.jpeg?im_w=720'
    },
    {
      src : 'https://a0.muscache.com/im/pictures/miso/Hosting-814355236310428415/original/8f5a3685-3246-4c0f-b583-b8e9de839b14.jpeg?im_w=1200'
    },
    {
      src : 'https://a0.muscache.com/im/pictures/miso/Hosting-814355236310428415/original/6f798f49-b59a-4259-aeb9-34010793af5d.jpeg?im_w=720'
    },
    {
      src : 'https://a0.muscache.com/im/pictures/miso/Hosting-814355236310428415/original/ea1b1f11-4b29-4aed-8593-509b969ada42.jpeg?im_w=720'
    }
  ]
  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }
  const handleMove = (direction) => {
    let newSlideNumber
    if(direction === 'p') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className='homestayContainer'>
        {open && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className='close'onClick={() => setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove('p')}/>
          <div className='sliderWrapper'>
            <img src={photos[slideNumber].src} alt='' className='sliderImg'/>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() => handleMove('n')}/>
          </div>}
        <div className='homestayWrapper'>
          <button className='bookNow'>Book Now!</button>
          <h1 className='homestayTitle'>West Lake Studio</h1>
          <div className='homestayAddress'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>152 Xuan Dieu , Tay Ho , Ha Noi , Viet Nam</span>
          </div>
          <span className='homestayDistance'>Near Flower Market - 4.1km from center</span>
            <span className='homestayPriceHighlight'>
              Book a stay over $99 and get free taxi from airport
              </span>
              <div className='homestayImages'>
                  {photos.map((photo,i) => (
                    <div className='homestayImgWrapper'>
                      <img 
                      onClick={() => handleOpen(i)}
                      src={photo.src} 
                      alt='' 
                      className='homestayImg'/>
                    </div>
                  ))}
              </div>
              <div className='homestayDetails'>
                <div className='homestayDetailsTexts'>
                  <h1 className='homestayTitle'>Stay in the heart of West lake</h1>
                  <p className='homestayDesc'>
                  Serviced apartment - Home stay with extremely cool lake view.
Located on Tay Ho peninsula, near Youth Street, a romantic road next to West Lake.
The apartment has a balcony with lake view, where you can sunbathe, drink coffee and watch the sunset.
The apartment is located in a quiet place with beautiful scenery, many cafes and restaurants, where there is a flower bridge reaching out to the West Lake for luxurious check-in service.
Flexible check-in hours, automatic check-in, comfortable hours.
                  </p>
                </div>
                <div className='homestayDetailsPrice'>
                  <h1>Perfect for 3-nights stay!</h1>
                  <span>
                    More than 50 peoples recommend this place 
                  </span>
                  <h2>
                    <b>$281</b> (3 nights)
                  </h2>
                  <button>Book Now!</button>
                </div>
              </div>
        </div>
        <MailList/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default Homestay