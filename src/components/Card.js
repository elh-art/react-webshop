import React from "react"
import { NavLink } from "react-router-dom"
import { generateStars, shortName } from "../assets/HelperFunctions"

const Card = ({ product, products, handleClickOnCart, handleClickOnWish }) => {
  const allStars = generateStars(product.rating)
  const shortendName = shortName(product)

  return (
    <>
      <div id={product.id} className={"box-arrival"}>
        <NavLink to={shortendName}>
          {" "}
          <div className="box-dark"></div>{" "}
        </NavLink>

        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="fashion">{product.category}</p>
          <p className="old-price">{product.oldPrice} $</p>
          <p className="new-price">{product.newPrice} $</p>
        </div>
        <div className="flying-tab">
          <i
            className="fal fa-heart"
            onClick={(item) => handleClickOnWish(item)}
          ></i>
          <NavLink to={shortName}>
            <i className="fa-light fa-magnifying-glass"></i>{" "}
          </NavLink>
          <i
            className="fa-regular fa-cart-shopping"
            onClick={(item) => handleClickOnCart(item)}
          ></i>
        </div>
        {product.new && <h3 className="new-product">NEW</h3>}
        {product.hotProduct && <h3 className="hot-product">HOT</h3>}
        {product.topSeller ? (
          <img
            className="topsellers-img"
            src={product.image}
            alt={product.name}
          />
        ) : (
          <img src={product.image} alt={product.name} />
        )}
        {product.banner && (
          <img
            className="corp-logo"
            src={product.banner}
            alt={"A logo of the company " + product.banner}
          />
        )}
        <div className="five-stars">{allStars.map((i) => i)}</div>
      </div>
    </>
  )
}

export default Card
