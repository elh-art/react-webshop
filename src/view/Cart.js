import React, { useContext, useEffect } from "react"
import { handlePrice } from "../assets/HelperFunctions"
import { CartContext, PriceContext, WishContext } from "../App"
import local_json from "../assets/products.json"

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  const { wishList, setWishList } = useContext(WishContext)
  const { price, setPrice } = useContext(PriceContext)

  const handleChange = (item, d) => {
    const idx = cart.indexOf(item)

    cart[idx][0].amount += d
    // Do not let the quantity counter drop below zero:
    if (cart[idx][0].amount === 0) cart[idx][0].amount = 1
    setCart([...cart])
  }

  const handleRemoveCart = (id) => {
    const filteredArr = cart.filter((elm) => elm[0].id !== id)
    setCart(filteredArr)
  }

  const handleRemoveWish = (id) => {
    const filteredArr = wishList.filter((elm) => elm[0].id !== id)
    setWishList(filteredArr)
  }

  const handleMoveToCart = (item) => {
    const idx = parseInt(item.target.parentNode.parentNode.id)
    const filteredArr = wishList.filter((elm) => elm[0].id !== idx)
    setWishList(filteredArr)

    const selectedCardObj = local_json.filter((obj) => obj.id === idx)
    //Product can be placed into cart only once:
    const selectedCardAgain = cart.some((item) => item[0].id === idx)
    if (selectedCardAgain === false) setCart([...cart, selectedCardObj])
  }

  useEffect(() => {
    handlePrice(cart, setPrice)
  })

  return (
    <div className="container cart-container">
      {wishList.length > 0 && (
        <h1 className="cart-text-header">Your Wish List:</h1>
      )}
      {wishList.map((item) => (
        <div className="cart_box" key={item[0].id} id={item[0].id}>
          <div className="cart_img">
            <img src={item[0].image} alt="" />
            <p>{item[0].name}</p>
          </div>
          <div>
            <button
              className="btn-theme fa-regular fa-cart-shopping"
              onClick={(item) => handleMoveToCart(item)}
            ></button>
          </div>
          <div className="cart-price-delete-block">
            <span>{item[0].newPrice} $</span>
            <button
              className="btn-theme fa-thin fa-trash"
              onClick={() => handleRemoveWish(item[0].id)}
            ></button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <h1 className="cart-text-header">Your Shopping Cart:</h1>
      )}
      {cart.map((item) => (
        <div className="cart_box" key={item[0].id}>
          <div className="cart_img">
            <img src={item[0].image} alt="" />
            <p>{item[0].name}</p>
          </div>
          <div>
            <button
              className="btn-theme fa-thin fa-circle-plus"
              onClick={() => handleChange(item, 1)}
            ></button>
            <button className="btn-theme">{item[0].amount}</button>
            <button
              className="btn-theme fa-thin fa-circle-minus"
              onClick={() => handleChange(item, -1)}
            ></button>
          </div>
          <div className="cart-price-delete-block">
            <span className="sum-price-per-item">
              {item[0].newPrice * item[0].amount} $
            </span>
            <button
              className="btn-theme fa-thin fa-trash"
              onClick={() => handleRemoveCart(item[0].id)}
            ></button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="total">
          <span>Total Price of Your Cart:</span>
          <span>$ {price}</span>
          <button className="btn btn-theme">ORDER</button>
        </div>
      )}
    </div>
  )
}

export default Cart
