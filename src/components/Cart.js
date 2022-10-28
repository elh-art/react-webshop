import React, { useContext, useEffect } from "react"
import { CartContext, PriceContext, WishContext } from "../App"

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  const { wishList, setWishList } = useContext(WishContext)
  const { price, setPrice } = useContext(PriceContext)

  const handleChange = (item, d) => {
    const idx = cart.indexOf(item)

    cart[idx][0].amount += d
    if (cart[idx][0].amount === 0) cart[idx][0].amount = 1
    setCart([...cart])
  }

  const handleRemove = (id) => {
    const filteredArr = cart.filter((item) => item[0].id !== id)
    setCart(filteredArr)
    handlePrice()
  }

  const handleRemoveWish = (id) => {
    const filteredArr = wishList.filter((item) => item[0].id !== id)
    setWishList(filteredArr)
  }

  const handlePrice = () => {
    let sumPrice = 0
    cart.map((item) => (sumPrice += item[0].amount * item[0].newPrice))
    setPrice(sumPrice)
  }

  useEffect(() => {
    handlePrice()
  })

  return (
    <div className="container cart-container">

     {wishList.length > 0 && 
      <h1 className="cart-text-header">Your Wish List:</h1> }
      {wishList.map((item) => (
        <div className="cart_box" key={item[0].id}>
          <div className="cart_img">
            <img src={item[0].image} alt="" />
            <p>{item[0].name}</p>
          </div>
          <div>
            <button><i
            className="fa-regular fa-cart-shopping"
            // onClick={(item) => handleClickOnCart(item)}
          ></i></button>
          </div>
          <div>
            <span>{item[0].newPrice} $</span>
            <button onClick={() => handleRemoveWish(item[0].id)}>Remove</button>
          </div>
        </div>
      ))}
     {cart.length > 0 && 
      <h1 className="cart-text-header">Your Shopping Cart:</h1> }
      {cart.map((item) => (
        <div className="cart_box" key={item[0].id}>
          <div className="cart_img">
            <img src={item[0].image} alt="" />
            <p>{item[0].name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item[0].amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item[0].newPrice * item[0].amount} $</span>
            <button onClick={() => handleRemove(item[0].id)}>Remove</button>
          </div>
        </div>
      ))}
     {cart.length > 0 && 
      <div className="total">
        <span>Total Price of Your Cart</span>
        <span>$ {price}</span>
        <button>Order</button>
      </div> }
    </div>
  )
}

export default Cart
