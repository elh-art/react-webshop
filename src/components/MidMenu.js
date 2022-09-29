import React from 'react'
import { NavLink } from 'react-router-dom'

const MidMenu = () => {
  return (
  <>
    <section className="mid-menu">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="company-logo">
          <NavLink to="/">
            <h1 className='fs-2 m-0'>
              ZEN
                <img src={require('../images/Path_8.png')} alt="KenKata logo"/>
              MODE
            </h1>
           </NavLink>
        </div>
        <div className="search-bar d-flex">
          <input className='ps-4' type="text" placeholder="Search products..." />
          <div className="dropdown">
            <button className="btn btn-secondary pe-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories 
              <i className="fa-light fa-angle-down ms-1"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="searchbar-dropdown">
              <li><NavLink to="products/men" className="dropdown-item">Men</NavLink></li>
              <li><NavLink to="products/women" className="dropdown-item">Women</NavLink></li>
              <li><NavLink to="products/kids" className="dropdown-item">Kids</NavLink></li>
              <li><NavLink to="products/accessories" className="dropdown-item">Accessories</NavLink></li>
            </ul>
          </div>
          <button className="magnifier bg-theme p-0 border border-0">
            <i className="fa-light fa-magnifying-glass position-relative fs-5 mt-1"></i>
          </button>
        </div>

        <div className="shopping d-flex align-items-center justify-content-between">

          <NavLink to="account" className="my-account ms-2">            
            <i className="fa-light fa-user"></i>
            <span className='fs-6 ms-2'>My account</span>
          </NavLink>
          <NavLink to="wishlist">
            <i className="fal fa-heart"></i>
          </NavLink>
          <NavLink to="compare" className="shopping-height">
            <i className="fa-light fa-random position-relative">
             <small className="shoppingamount position-absolute">0</small> 
            </i>
          </NavLink>

          <div className="shopping-height d-flex align-items-center justify-content-between">
            <i className="fal fa-shopping-bag position-relative me-3">
             <small className="shoppingamount position-absolute">0</small>
            </i>
          <div className="priceofgoods fs-6 ">$0.00</div>
          </div> 
        </div>
      </div>
    </section>

    <div className="main-menu">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="dropdown">
          <button className="btn btn-theme p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-regular fa-bars"></i>
            <span className='ms-2'>Browse Categories</span> 
            <i className="fa-regular fa-chevron-down ps-5"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="main-menu-dropdown">
            <li><NavLink to="products/men" className="dropdown-item">Men</NavLink></li>
            <li><NavLink to="products/women" className="dropdown-item">Women</NavLink></li>
            <li><NavLink to="products/kids" className="dropdown-item">Kids</NavLink></li>
            <li><NavLink to="products/accessories" className="dropdown-item">Accessories</NavLink></li>
          </ul>
        </div>
        <NavLink to="special-offer" className="btn btn-theme btn-special-offer" type="submit">SPECIAL OFFER</NavLink>
      </div>
    </div>
  </>
 )
}

export default MidMenu