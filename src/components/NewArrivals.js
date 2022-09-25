import React, {useState} from 'react'
import local_json from '../assets/products.json'
import '../css/NewArrivals.css'

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
              product.newArrival ?
              <div key={product.id} className="box-arrival">
                  <div className="box-dark"></div>
                  {product.new ? <h3>NEW</h3> : ''}
                  <img src={`${product.image}`} alt={product.name} />
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="fashion">{product.category}</p>
                    <p className="old-price">{product.oldPrice} $</p>
                    <p className="new-price">{product.newPrice} $</p>
                  </div> 
                  <div className="flying-tab">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fal fa-heart"></i>
                    <i className="fa-light fa-random"></i>
                    <i className="fa-light fa-magnifying-glass"></i>
                    <i className="fa-regular fa-cart-shopping"></i>
                  </div>        
              </div> : ''
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