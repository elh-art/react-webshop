import React from 'react'
import freeShippingIcon from '../images/free-shipping-icon.svg'
import freeShippingIconWhite from '../images/free-shipping-icon_white.svg'
import clockIcon from '../images/clock-icon.svg'
import clockIconWhite from '../images/clock-icon_white.svg'
import onlinePaymentIcon from '../images/online-payment-icon.svg'
import onlinePaymentIconWhite from '../images/online-payment-icon_white.svg'
import freeDelineryIcon from '../images/free-delivery-icon.svg'
import freeDelineryIconWhite from '../images/free-delivery-icon_white.svg'

const WebShopInfo = () => {
 return (
  <>
    <div className="webshop-info">
      <div className="container-fluid d-flex justify-content-evenly align-items-center">
        <div className="infobox">
          <div className="infobox-container">
            <img src={freeShippingIcon} className="me-3" alt="a free shipping icon"/>
            <img className="img-top me-3" src={freeShippingIconWhite} alt="a free shipping icon"/>
          </div>
          <div>
            <h3><strong>Free shipping</strong></h3>
            <p>For a local customer, we provide free shipping facility</p>
          </div>
        </div>
        <div className="infobox">
          <div className="infobox-container">
            <img src={clockIcon} className="me-3" alt="a clock icon"/>
            <img className="img-top me-3" src={clockIconWhite} alt="a clock icon"/>
          </div>
          <div>
            <h3><strong>27/7 support</strong></h3>
            <p>For any inquiry, we are available 24 hours every day</p>
          </div>
        </div>
        <div className="infobox">
          <div className="infobox-container">
            <img src={onlinePaymentIcon} className="me-3" alt="an online payment icon"/>
            <img className="img-top me-3" src={onlinePaymentIconWhite} alt="an online payment icon"/>
          </div>
          <div>
            <h3><strong>Online payment</strong></h3>
            <p>You can pay quickly and easily with our online payment system</p>
          </div>
        </div>
        <div className="infobox">
          <div className="infobox-container">
            <img src={freeDelineryIcon} className="me-3" alt="a free delivery icon"/>
            <img className="img-top me-3" src={freeDelineryIconWhite} alt="a free delivery icon"/>
          </div>
          <div>
            <h3><strong>Free delivery</strong></h3>
            <p>For a local customer, we provide free shipping facility</p>
          </div>
        </div>
      </div>
    </div>
  </>
 )
}

export default WebShopInfo