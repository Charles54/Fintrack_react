import React from 'react'
import  './nav.css'

const Nav = () => {
  return (
    <nav>

        <div className="left">
        <i class="fa-solid fa-bolt"></i><span>FinTrack</span>
        </div>
        <div className="right">
        <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Products</li>
        </ul>
        <button><i class="fa-solid fa-download"></i><span>Download App</span> </button>
        </div>

    </nav>
        
  )
}

export default Nav