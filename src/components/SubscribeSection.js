import React from 'react'
import '../css/SubscribeSection.css'

const SubscribeSection = () => {
  return (
    <>
      <section className="showcase subscribe-box">
        <div className="container d-flex justify-content-between align-items-center p-0">
          <div className="showcase_content">
            <div className="shop-by-category m-0 mb-4">
              <h2>Subscribe <span> Now </span></h2>
            </div>
            <p className='mb-4'>Signup for awesome news about our new products and know our special discounts on products.</p>
            <div className="embeded-subscribe d-flex justify-content-between align-items-center">
              <input className='ps-4' type="email" placeholder="Enter email address"/>
              <button className="btn btn-theme py-0 px-4">Subscribe</button>
            </div>
          </div>
          <div className="grey-box"></div>
        </div>
      </section>
    </>
  )
}

export default SubscribeSection