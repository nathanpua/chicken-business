import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/><TelegramIcon/><LinkedInIcon/>
      </div>
      <p> &copy; 2024 knnccb.com</p>
    </div>
  )
}

export default Footer