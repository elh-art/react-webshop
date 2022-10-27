import React, { useContext, useEffect } from "react"
import { CartContext, PriceContext } from "../App"
import { handlePrice } from "../assets/HelperFunctions"

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
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
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>$ {price}</span>
      </div>
    </div>
  )
}

export default Cart
