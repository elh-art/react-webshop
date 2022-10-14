import React, {useState} from 'react'
import local_json from '../assets/products.json'
import Card from './Card'

const NewArrivals = () => {

  const [products, setProducts] = useState(local_json)

  return (
    <>
      <div className="arrivals d-flex justify-content-center align-items-center">
        <div className="less-than">
          <i className="fa-solid fa-less-than fa-3x"></i>
        </div>
        <div className="arrival-container container d-flex justify-content-between align-items-center p-0 gap-2 mx-3 mt-5 mb-4">
          { products.map(product => (
              product.newArrival &&
              <Card key={product.id} product={product} products={products} />
            ))
          }
        </div>
        <div className="greater-than">
          <i className="fa-solid fa-greater-than fa-3x"></i>
        </div>
      </div>
    </>
  )
}

export default NewArrivals