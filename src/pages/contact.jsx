import React from 'react'
import pizzaleft from '../Assets/pizzaLeft.jpg'
import '../styles/contact.css'

function contact() {
  return (
    <div className='contact'>
      <div className='leftSide'
            style={{ backgroundImage: `url(${pizzaleft})`}}>
      </div>
      <div className='rightSide'>
        <h1> Contact Us </h1>
        <form id='contact-form' method='POST'>
          <label htmlFor='name'>
            Full Name
          </label>
          <input name='name' placeholder='Enter full name...' type='text'/>

          <label htmlFor='email'>
            Email
          </label>
          <input name='email' placeholder='Enter email...' type='email'/>

          <label htmlFor='message'>Message</label>
          <textarea rows="6" name='message' required/>

          <button type='submit'>
            Send Message
          </button>
        </form>
      </div>

    </div>
  )
}

export default contact