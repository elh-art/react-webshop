import React from "react"
import { NavLink } from "react-router-dom"

const ShoppingGrid = () => {
  return (
    <>
      <div className="shopping-grid d-flex justify-content-center">
        <div className="container grid">
          <NavLink to="products/men" className="grid-item1">
            <div className="grid-pack">
              <span>Men</span>
              <h3>12 products</h3>
            </div>
          </NavLink>
          <NavLink to="products/women" className="grid-item2">
            <div className="grid-pack">
              <span>Women</span>
              <h3>28 products</h3>
            </div>
          </NavLink>
          <NavLink to="products/kids" className="grid-item3">
            <div className="grid-pack">
              <span>Kids</span>
              <h3>16 products</h3>
            </div>
          </NavLink>
          <NavLink to="products/accessories" className="grid-item4">
            <div className="grid-pack">
              <span>Accessories</span>
              <h3>11 products</h3>
            </div>
          </NavLink>
          <NavLink to="products" className="grid-item5"></NavLink>
        </div>
      </div>
    </>
  )
}

export default ShoppingGrid
