import React from 'react'
import { NavLink } from 'react-router-dom'

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-theme top-menu">
      <div className="container">
        <div className="company-logo">
          <NavLink to="/">
            <h1 className='fs-2 m-0'>
              ZEN
                <img src={require('../images/Path_8.png')} alt="company logo"/>
              MODE
            </h1>
           </NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="links collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav justify-content-between align-items-center">
            <div className="links-top">
              <NavLink to="newsletter">Newsletter</NavLink> 
              <NavLink to="contact">Contact us</NavLink>
              <NavLink to="faq">FAQs</NavLink>
            </div>
            <div className="socialmedia ms-4 d-flex justify-content-between align-items-center"> 
              <a href="https://www.twitter.com" target="_blank"><i className="nav-link fa-brands fa-twitter"></i></a>
              <a href=" https://www.facebook.com" target="_blank"><i className="nav-link fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com" target="_blank"><i className="nav-link fa-brands fa-linkedin"></i></a>
              <a href="https://www.tiktok.com" target="_blank"><i className="nav-link fa-brands fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopMenu