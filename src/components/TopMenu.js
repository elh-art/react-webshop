import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/TopMenu.css'

const TopMenu = () => {
  return (
    <>
     <nav className="top-menu bg-theme">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="site-settings d-flex">
          <select name="language">
            <option value="language">ENG</option>
            <option value="language">SWE</option>
          </select>
          <select name="currency">
            <option value="currency">SEK</option>
            <option value="currency">EUR</option>
            <option value="currency">USD</option>
          </select>
        </div>
        <div className="links d-flex justify-content-end align-items-center">
          <div className="links-top">
            <NavLink to="newsletter">Newsletter</NavLink> 
            <NavLink to="contact">Contact us</NavLink>
            <NavLink to="faq">FAQs</NavLink>
          </div>
          <div className="socialmedia ms-4"> 
            <a href="https://www.twitter.com" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.tiktok.com" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </div>
     </nav>
    </>
  )
}

export default TopMenu