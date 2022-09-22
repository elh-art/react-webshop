import React from 'react'
import '../css/ShowCase.css'
import { NavLink } from 'react-router-dom'

const ShowCase = () => {
  return (
    <>
      <div className="showcase">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="showcase_content">
            <img className="showcaseImg mb-4 pb-3" src={require('../images/Shopping_is_MOR.png')} alt="Picture with text: shopping is more"/>
            <p className='mb-4 pb-4 fs-6'>Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</p>
            <NavLink to="products">
             <button className="btn btn-white">SHOP NOW</button>
            </NavLink>
          </div>
          <img src={require('../images/Banner-thumb.png')} alt="two people in fashionable clothes"/>
        </div>
      </div>
    </>
  )
}

export default ShowCase