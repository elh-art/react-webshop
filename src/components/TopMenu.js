import React from 'react'
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
          </select>
        </div>
        <div className="links d-flex justify-content-end align-items-center">
          <div className="links-top">
            <a href="#">Newsletter</a> 
            <a href="#">Contact us</a>
            <a href="#">FAQs</a>
          </div>
          <div className="socialmedia ms-4"> 
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
      </div>
     </nav>
    </>
  )
}

export default TopMenu