import React, { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import local_json from "../assets/products.json"
import { handleClickOnX } from "../assets/HelperFunctions"
import { CartContext, WishContext } from "../App"
import Card from "../components/Card"

const Product = () => {
  const { cart, setCart } = useContext(CartContext)
  const { wishList, setWishList } = useContext(WishContext)
  const [products] = useState(local_json)
  const { id } = useParams()

  const handleClickOnCart = (item) => {
    handleClickOnX(item, cart, setCart)
  }

  const handleClickOnWish = (item) => {
    handleClickOnX(item, wishList, setWishList)
  }

  const handleClickOnWishing = (item) => {
    const selectedCardObj = local_json.filter((obj) => obj.id === Number(id))
    const selectedCardAgain = wishList.some((item) => item[0].id === Number(id))
    if (selectedCardAgain === false) setWishList([...wishList, selectedCardObj])
  }

  const handleClickOnShopping = (item) => {
    const selectedCardObj = local_json.filter((obj) => obj.id === Number(id))
    const selectedCardAgain = cart.some((item) => item[0].id === Number(id))
    if (selectedCardAgain === false) setCart([...cart, selectedCardObj])
  }

  return (
  <div className="container">
     {products.map((product) => (
      product.id === Number(id) &&
         <div className="product-details d-flex align-items-center justify-content-between flex-wrap my-3">
            <div>
              <Card
              key={product.id}
              product={product}
              products={products}
              handleClickOnCart={handleClickOnCart}
              handleClickOnWish={handleClickOnWish} />
            </div>
            <div className="single-product ms-2 my-2"> 
              <h2>{product.name}</h2>
              <h4>{product.newPrice}$ / <span>{product.oldPrice}$</span></h4>
              <p>{product.description}</p>
              <div>
              {product.sizes.map(size => (
                <button className="btn btn-theme m-1">{size}</button>
              ))}
              </div>
              <div className="buying-options d-flex flex-column m-1">
                <i onClick={handleClickOnWishing} className="fa-regular fa-heart my-2"> Add to Wishlist </i>
                <i onClick={handleClickOnShopping} className="fa-regular fa-cart-shopping my-2"> Add to Cart</i>
              </div>
            </div>
         </div>
     ))}
   </div>
  )
}

export default Product
