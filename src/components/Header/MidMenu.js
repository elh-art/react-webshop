import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext, PriceContext, WishContext } from "../../App"

const MidMenu = () => {
  const { cart } = useContext(CartContext)
  const { price } = useContext(PriceContext)
  const { wishList } = useContext(WishContext)

  return (
    <>
      <section className="mid-menu navbar navbar-expand-lg">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex navbar-nav justify-content-between align-items-center">
              <div className="account-wishlist d-flex justify-content-between align-items-center">
                <NavLink
                  to="account"
                  className="my-account d-flex justify-content-between align-items-center"
                >
                  <i className="fa-light fa-user"></i>
                  <span className="fs-6 ms-2">My Account</span>
                </NavLink>
              </div>

              <div className="search-bar d-flex m-3">
                <input
                  className="ps-4"
                  type="text"
                  placeholder="Search products..."
                />
                <button className="magnifier bg-theme p-0">
                  <i className="fa-light fa-magnifying-glass position-relative fs-5 mt-1"></i>
                </button>
              </div>

              <div className="shopping d-flex align-items-center justify-content-between">
                <NavLink to="shopping-cart">
                  <i className="fa-light fa-heart position-relative">
                    <small className="shoppingamount position-absolute">
                      {wishList.length}
                    </small>
                  </i>
                </NavLink>
                <NavLink
                  to="shopping-cart"
                  className="shopping-height d-flex align-items-center justify-content-between"
                >
                  <i className="fa-light fa-cart-shopping position-relative">
                    <small className="shoppingamount position-absolute">
                      {cart.length}
                    </small>
                  </i>
                </NavLink>
                <div className="priceofgoods fs-6 ">$ {price}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="main-menu">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-theme p-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-regular fa-bars"></i>
              <span className="ms-2">Categories</span>
              <i className="fa-regular fa-chevron-down"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="main-menu-dropdown">
              <li>
                <NavLink to="products/men" className="dropdown-item">
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink to="products/women" className="dropdown-item">
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink to="products/kids" className="dropdown-item">
                  Kids
                </NavLink>
              </li>
              <li>
                <NavLink to="products/accessories" className="dropdown-item">
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="special-offer"
            className="btn btn-theme btn-special-offer"
            type="submit"
          >
            SPECIAL OFFER
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default MidMenu
