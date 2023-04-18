import React from 'react'
import './download.css'


const Download = () => {
  return (
   <> <div className='writing'> <h1>Simplify <span>Financial Mangement</span> <br /> With Fintrack</h1></div>
    <div> <p className='writing2'>With Fintrack, you can now track you spending easily, make payments, pay your bills and simplify your <br /> financial. Let Fintrack help you become financially prudent.</p></div>
    <div className='button'>
        <div><button>
            <div><i class="fa-brands fa-google-play fa-2x"></i></div>
            <div> <div> Get it on</div> <div className='store'> Google Play </div> </div>
            </button></div>
        <div><button><div><i class="fa-brands fa-apple fa-2x"></i></div>
        <div> <div> Download it on <div className='store'>Apple Store </div> </div> </div></button></div>
    </div>
    <div className='image'><img src="./img/download.png" alt="" /></div>
    <div className='box'>
        <div className='box1'>
            <div className='number'>100%</div>
            <div><p>security on all savings <br /> and investments</p></div>
        </div>
        <div className='box1'>
            <div className='number'>24</div>
            <div><p> hours customer <br /> support</p></div>
        </div>
        <div className='box1'>
            <div className='number'>10</div>
            <div><p>years banking <br />experience</p></div>
        </div>
    </div>
    </>
  )
}

export default Download