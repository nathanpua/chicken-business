import React from 'react'
import logo from '../Assets/white_logo.png'
import '../styles/About.css';

function about() {
  return (
    <div className='about' >
      <div className='aboutTop'
      style={{ backgroundImage: `url(${logo})`}}>
      </div>
      <div className='aboutBottom'>
        <h1> ABOUT US </h1>
        <p> Hello guys! Thank you for choosing KNNCCB
           (K and N's Chicken Chop Business) as
           your supper fix:) We strive to provide you with healthy, 
           high protein, and affordable
           meals that will make you very full and very happy !!😁😁
            Please contact us on tele @mianbaopua</p>
      </div>
    </div>
  )
}

export default about