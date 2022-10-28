import React, { useState } from "react"
import local_json from "../assets/products.json"
import Card from "./Card"

const TopSellers = ({ handleClickOnCart, handleClickOnWish }) => {
  const [products, setProducts] = useState(local_json)

  return (
    <>
      <div className="arrivals d-flex justify-content-center align-items-center">
        <div className="topsellers-grid container d-grid gap-3 p-0 my-5 mx-0">
          {products.map(
            (product) =>
              product.topSeller && (
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
    </>
  )
}

export default TopSellers
