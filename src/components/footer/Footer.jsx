import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='first'>
        <div className='col1'><i class="fa-solid fa-bolt"></i><span>FinTrack</span></div>
        <div className='col2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quibusdam commodi dignissimos?</div>
        <div className='col3'>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
    <div className='second'>
        <ul>
            <li><h3>Links</h3></li>
            <li>Home</li>
            <li>Features</li>
            <li>About Us</li>
            <li>Contact Us</li>

        </ul>
    </div>
    <div className='third'>
        <ul>
            <li>
                <h3>Support</h3>
            </li>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Security</li>
            <li>Accessibility</li>
        </ul>
    </div>
    <div className='fourth'>
        <ul>
            <li><h3>Legal</h3></li>
            <li>Privacy Policy</li>
            <li>Terms and conditions</li>
            <li>Security</li>
            <li>Accessibility</li>
        </ul>
    </div>
    </footer>
  )
}

export default Footer