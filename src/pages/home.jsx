import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function home() {
  return (
    <div className='home'>
        <div className='headerContainer'>
            <h1> KNNCCB </h1>
            <p> HEALTHY AND AFFORDABLE SUPPERS </p>
            <Link to="/menu">
                <button> ORDER NOW </button>
            </Link>
            
        </div>
    </div>
  )
}

export default home