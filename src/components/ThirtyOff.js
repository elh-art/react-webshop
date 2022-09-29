import React from 'react'
import { NavLink } from 'react-router-dom'

const ThirtyOff = () => {
  return (
    <>
      <div className="thirty-off my-5 mx-0">
        <div className="container d-flex justify-content-between align-items-center p-0">
          <div className="thirty-off_content d-flex flex-column align-items-center justify-content-center">
            <img className="thirty-offImg" src={require('../images/30OFF.png')} alt="Picture with text: 30% off"/>
            <p>For new customers</p>
            <NavLink to='products'>
             <button className="btn btn-white">SHOP NOW</button>
            </NavLink>
          </div>
          <div className="thirty-off-sidepanel">
            <p className='mb-5'>Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
            <NavLink to='faq'>
             <button className="btn btn-white">LEARN MORE</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirtyOff