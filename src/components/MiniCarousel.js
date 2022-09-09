import React from 'react'
import '../css/MiniCarousel.css'

const MiniCarousel = () => {
  return (
    <>
      <div className="mini-carousel d-flex justify-content-center align-items-center">
        <div className="mini-box first-mini"></div>
        <div className="mini-box second-mini"></div>
        <div className="mini-box third-mini"></div>
      </div>
    </>
  )
}

export default MiniCarousel