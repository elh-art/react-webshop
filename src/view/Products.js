import React, { useState, useContext } from "react"
import { CartContext, WishContext } from "../App"
import local_json from "../assets/products.json"
import { handleClickOnX } from "../assets/HelperFunctions"
import Card from "../components/Card"
import { useParams } from "react-router-dom"

const Products = () => {
  const [products] = useState(local_json)
  const { cart, setCart } = useContext(CartContext)
  const { wishList, setWishList } = useContext(WishContext)
  const { id } = useParams()

  const handleClickOnCart = (item) => {
    handleClickOnX(item, cart, setCart)
  }

  const handleClickOnWish = (item) => {
    handleClickOnX(item, wishList, setWishList)
  }

  return (
    <div className="container">
      <div className="shop-by-category text-center">
        <h1>
          {id === "accessories"
            ? "Our Best "
            : id === "collection"
            ? "Our Complete "
            : "Only For "}
          <span>
            {id.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            )}
            :
          </span>
        </h1>
      </div>
      <div className="arrival-container d-flex flex-wrap justify-content-between align-items-center gap-5 my-5">
        {id === "collection" &&
          products.map((product) => (
            <Card
              key={product.id}
              product={product}
              products={products}
              handleClickOnCart={handleClickOnCart}
              handleClickOnWish={handleClickOnWish}
            />
          ))}
        {products.map(
          (product) =>
            product.subcategory === id && (
              <Card
                key={product.id}
                product={product}
                products={products}
                handleClickOnCart={handleClickOnCart}
                handleClickOnWish={handleClickOnWish}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Products
