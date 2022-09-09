import React from 'react'
import '../css/TopSellers.css'

const TopSellers = () => {
  return (
    <>
      <div className="arrivals d-flex justify-content-center align-items-center">
        <div className="topsellers-grid container d-grid gap-3 p-0 my-5 mx-0">
          <div className="box-arrival grid-topsell1">
              <div className="box-dark"></div>
              <img className="corp-logo" src={require('../images/Bexim.png')} alt="A logo of the company Bexim"/>
              <img className="topsellers-img" src={require('../images/Product_left.png')} alt="Top sellers Product one"/>
              <div className="product-info">
                <p className="product-name">Men's denim shirts full</p>
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
              <div className="five-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>        
          </div>
          <div className="box-arrival grid-topsell2">
            <div className="box-dark"></div>
            <img className="corp-logo" src={require('../images/Lighton.png')} alt="A logo of the company Lighton"/>
            <img className="topsellers-img" src={require('../images/Product_up.png')} alt="Top sellers Product two"/>
            <div className="product-info">
              <p className="product-name">Women's leather bag and shoe</p>
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
            <div className="five-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div> 
          </div>
          <div className="box-arrival grid-topsell3">
            <div className="box-dark"></div>
            <img className="corp-logo" src={require('../images/Rosimo.png')} alt="A logo of the company Rosimo"/>
            <img className="topsellers-img" src={require('../images/Product_down.png')} alt="Top sellers Product three"/>
            <div className="product-info">
              <p className="product-name">New look men's sneakers</p>
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
            <div className="five-stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default TopSellers