import React from 'react'
import '../css/MidMenu.css'

const MidMenu = () => {
  return (
  <>
    <header className="mid-menu">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="company-logo">
           <h1 className='fs-2 m-0'>
            KEN
            <img src={require('../images/Path_8.png')} alt="KenKata logo"/>
            KATA
           </h1>
        </div>
        <div className="search-bar d-flex">
          <input className='ps-4' type="text" placeholder="Search products..." />
          <div className="dropdown">
            <button className="btn btn-secondary pe-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories 
              <i className="fa-light fa-angle-down ms-1"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="searchbar-dropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <button className="magnifier bg-theme p-0 border border-0">
            <i className="fa-light fa-magnifying-glass position-relative fs-5 mt-1"></i>
          </button>
        </div>

        <div className="shopping d-flex align-items-center justify-content-between">
          <a className="my-account d-flex align-items-center" href="./myaccount.html">
            <i className="fa-light fa-user"></i>
            <span className='fs-6 ms-2'>My account</span>
          </a>
          <a href="#"><i className="fal fa-heart"></i></a>
          <a className="shopping-height position-relative" href="#">
            <i className="fa-light fa-random position-absolute">
             <small className="shoppingamount position-absolute">0</small> 
            </i>
          </a>
          <a className="shopping-height position-relative" href="#">
            <i className="fal fa-shopping-bag position-absolute">
             <small className="shoppingamount position-absolute">0</small>
            </i>
          </a> 
          <div className="priceofgoods fs-6 ms-1">$0.00</div>
        </div>
      </div>
    </header>

    <div className="main-menu">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="dropdown">
          <button className="btn btn-theme p-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-regular fa-bars"></i>
            <span>Browse Categories</span> 
            <i className="fa-regular fa-chevron-down ps-5"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="main-menu-dropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <button className="btn btn-theme btn-special-offer" type="submit">SPECIAL OFFER</button>
      </div>
    </div>
  </>
 )
}

export default MidMenu