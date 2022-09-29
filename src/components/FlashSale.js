import React from 'react'
import { NavLink } from 'react-router-dom'

const FlashSale = () => {
  return (
    <>
      <section className="flash-sale my-5 mx-0">
        <div className="container d-flex justify-content-between align-items-center position-relative p-0">
          <div className="flash-sale_content d-flex flex-column position-absolute top-0 start-0">
            <img className="flash-saleImg mt-5 ms-4" src={require('../images/Flash_sale.png')} alt="Picture with text: flash-sale"/>
            <p className='fs-3 mt-4 ms-5'>UP TO 50% OFF</p>
          </div>
          <div className="flash-sale-sidepanel position-absolute text-center end-0">
            <div className="time-balls mb-4 d-flex justify-content-between align-items-center text-center">
              <div className="time-ball">
                <h3>7</h3>
                <p>Days</p>
              </div>
              <div className="time-ball">
                <h3>23</h3>
                <p>Hours</p>
              </div>
              <div className="time-ball">
                <h3>46</h3>
                <p>Minutes</p>
              </div>
              <div className="time-ball">
                <h3>12</h3>
                <p>Seconds</p>
              </div>
            </div>
            <NavLink to='products'>
              <button className="btn btn-white">SHOP NOW</button>
            </NavLink>         
          </div>
        </div>
      </section>  
    </>
  )
}

export default FlashSale