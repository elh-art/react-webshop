import React from 'react'
import waveLine from '../images/wave-line.svg'

const ShopByCategory = ({header1, header2, fillertext}) => {
  return (
    <>
      <div className="shop-by-category text-center">
        <h1>{header1} <span> {header2} </span></h1>
        <img src={waveLine} alt="waved line" />
        <p className="my-2">{fillertext}</p>
      </div>
    </>
  )
}

export default ShopByCategory