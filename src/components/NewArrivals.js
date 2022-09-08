import React from 'react'
import '../css/NewArrivals.css'

const NewArrivals = () => {
  return (
    <>
      <div className="arrivals d-flex justify-content-center align-items-center">
        <div className="less-than">
          <i className="fa-solid fa-less-than fa-3x"></i>
        </div>
        <div className="arrival-container container d-flex justify-content-between align-items-cente p-0 gap-2 mx-3 mt-5 mb-4">
          <div className="box-arrival">
              <div className="box-dark"></div>
              <h3>NEW</h3>
              <img src={require('../images/NewArrival1.png')} alt="New arrival sleved top" />
              <div className="product-info">
                <p className="product-name">Blue silk flare sleeved top</p>
                <p className="fashion">Fashion</p>
                <p className="old-price">$220.00</p>
                <p className="new-price">$190.00</p>
              </div> 
              <div className="flying-tab">
                <i className="fa-solid fa-circle"></i>
                <i className="fal fa-heart"></i>
                <i className="fa-light fa-random"></i>
                <i className="fa-light fa-magnifying-glass"></i>
                <i className="fa-regular fa-cart-shopping"></i>
              </div>        
          </div>
          <div className="box-arrival">
            <div className="box-dark"></div>
            <h3>NEW</h3>
            <img src={require('../images/NewArrival2.png')} alt="New arrival mens coat" />
            <div className="product-info">
              <p className="product-name">New look men's coat</p>
              <p className="fashion">Fashion</p>
              <p className="old-price">$220.00</p>
              <p className="new-price">$190.00</p>
            </div>
            <div className="flying-tab">
              <i className="fa-solid fa-circle"></i>
              <i className="fal fa-heart"></i>
              <i className="fa-light fa-random"></i>
              <i className="fa-light fa-magnifying-glass"></i>
              <i className="fa-regular fa-cart-shopping"></i>
            </div> 
          </div>
          <div className="box-arrival">
            <div className="box-dark"></div>
            <h3>NEW</h3>
            <img src={require('../images/NewArrival3.png')} alt="New arrival girls shirt" />
            <div className="product-info">
              <p className="product-name">Circle pattern girls shirt</p>
              <p className="fashion border">Fashion</p>
              <p className="old-price">$220.00</p>
              <p className="new-price">$190.00</p>
            </div>
            <div className="flying-tab">
              <i className="fa-solid fa-circle"></i>
              <i className="fal fa-heart"></i>
              <i className="fa-light fa-random"></i>
              <i className="fa-light fa-magnifying-glass"></i>
              <i className="fa-regular fa-cart-shopping"></i>
            </div> 
          </div>
        </div>
        <div className="greater-than">
          <i className="fa-solid fa-greater-than fa-3x"></i>
        </div>
      </div>
    </>
  )
}

export default NewArrivals