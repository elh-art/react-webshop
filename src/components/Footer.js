import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="d-flex justify-content-between">
        <div className="container d-flex justify-content-between align-items-center p-0">
          <p className="m-0">© Copyright 2020 KenKata</p>
          <div className="available-payments d-flex">
            <img src={require('../images/mastercard.png')} alt="mastercard"/>
            <img src={require('../images/paypal.png')} alt="paypal"/>
            <img src={require('../images/visa.png')} alt="visa"/>
            <img src={require('../images/payoneer.png')} alt="payoneer"/>
            <img src={require('../images/discover.png')} alt="discover"/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer