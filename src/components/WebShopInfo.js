import React, {useState} from 'react'
import Infobox from './Infobox'

const WebShopInfo = () => {

  const [items, setItem] = useState([
    {
      id: 1,
      pic1: "/pictures/free-shipping-icon.svg",
      pic2: "/pictures/free-shipping-icon_white.svg",
      header: "27/7 support",
      text: "For a local customer, we provide free shipping facility"
    },
    {
      id: 2,
      pic1: "/pictures/clock-icon.svg",
      pic2: "/pictures/clock-icon_white.svg",
      header: "Free shipping",
      text: "For any inquiry, we are available 24 hours every day"
    },
    {
      id: 3,
      pic1: "/pictures/online-payment-icon.svg",
      pic2: "/pictures/online-payment-icon_white.svg",
      header: "Online payment",
      text: "You can pay quickly and easily with our online payment system"
    },
    {
      id: 4,
      pic1: "/pictures/free-delivery-icon.svg",
      pic2: "/pictures/free-delivery-icon_white.svg",
      header: "Free delivery",
      text: "For a local customer, we provide free shipping facility"
    }
  ])

 return (
  <>
    <div className="webshop-info">
      <div className="container-fluid row my-5 d-flex justify-content-evenly align-items-center">

        {
          items.map((item) => (
            <Infobox item={item} />
          ))
        }

      </div>
    </div>
  </>
 )
}

export default WebShopInfo