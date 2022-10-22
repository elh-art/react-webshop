import React from "react"
import { NavLink } from "react-router-dom"

const ShowCase = () => {
  return (
    <>
      <div className="showcase">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="showcase_content my-4">
            <img
              className="showcaseImg mb-4 pb-3"
              src={require("../images/Shopping_is_MOR.png")}
              alt="Picture with text: shopping is more"
            />
            <p className="mb-4 pb-4 fs-6">
              Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam
              ultricies faucibus. Quisque quis erat sed
            </p>
            <NavLink to="products">
              <button className="btn btn-white">SHOP NOW</button>
            </NavLink>
          </div>
          <img
            className="showcaseBigImg"
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            alt="two people in fashionable clothes"
          />
        </div>
      </div>
    </>
  )
}

export default ShowCase
