import React, { useState } from "react"
import local_json from "../assets/products.json"
import Card from "./Card"

const HotSales = ({ handleClickOnCart }) => {
  const [products, setProducts] = useState(local_json)

  return (
    <>
      <div className="arrivals d-flex justify-content-center align-items-center">
        <div className="arrival-container container d-flex justify-content-between align-items-center p-0 gap-2 mx-3 mt-5 mb-4">
          {products.map(
            (product) =>
              product.featured && (
                <Card
                  key={product.id}
                  product={product}
                  products={products}
                  handleClickOnCart={handleClickOnCart}
                />
              )
          )}
        </div>
      </div>
    </>
  )
}

export default HotSales
