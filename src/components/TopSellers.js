import React, {useState} from 'react'
import local_json from '../assets/products.json'
import '../css/TopSellers.css'

const TopSellers = () => {

  const [products, setProducts] = useState(local_json)

  return (
    <>
      <div className="arrivals d-flex justify-content-center align-items-center">
        <div className="topsellers-grid container d-grid gap-3 p-0 my-5 mx-0">

          {
            products.map(product => (
              product.topSeller ?             
              <div key={product.id} className={"box-arrival grid-topsell" + `${products.length - product.id}`}>
                  <div className="box-dark"></div>
                  <img className="corp-logo" src={product.banner} alt={"A logo of the company " + product.banner}/>
                  <img className="topsellers-img" src={product.image} alt={product.name}/>
                  <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="fashion">{product.category}</p>
                    <p className="old-price">{product.oldPrice}</p>
                    <p className="new-price">{product.newPrice}</p>
                  </div> 
                  <div className="flying-tab">
                    <i className="fa-solid fa-circle"></i>
                    <i className="fal fa-heart"></i>
                    <i className="fa-light fa-random"></i>
                    <i className="fa-light fa-magnifying-glass"></i>
                    <i className="fa-regular fa-cart-shopping"></i>
                  </div>
                  <div className="five-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>        
              </div>
            : ''
            ))
          }

        </div>
      </div>
    </>
  )
}

export default TopSellers