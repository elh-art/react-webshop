import React, {useState} from 'react'
import '../css/NewArrivals.css'

const NewArrivals = () => {

  const [products, setProducts] = useState([
    { id: 1, 
      name: "Blue silk flare sleeved top bottom", 
      category: "Fashion", 
      oldPrice: 50.00, 
      newPrice: 20.00, 
      rating: 4, 
      image: require('../images/NewArrival1.png'),
      new: true},
    { id: 2, 
      name: "Black silk flare sleeved top", 
      category: "Fashion", 
      oldPrice: 56.00, 
      newPrice: 22.00, 
      rating: 2, 
      image: require('../images/NewArrival2.png'),
      new: false},
    { id: 3, 
      name: "New look men's coat", 
      category: "Fashion", 
      oldPrice: 44.00, 
      newPrice: 35.00, 
      rating: 5, 
      image: require('../images/NewArrival3.png'),
      new: false},
])

  return (
    <>
      <div className="arrivals d-flex justify-content-center align-items-center">
        <div className="less-than">
          <i className="fa-solid fa-less-than fa-3x"></i>
        </div>
        <div className="arrival-container container d-flex justify-content-between align-items-center p-0 gap-2 mx-3 mt-5 mb-4">
          { products.map(product => (
              <div className="box-arrival">
                  <div className="box-dark"></div>
                  {product.new ? <h3>NEW</h3> : ''}
                  <img src={product.image} alt="New arrival sleved top" />
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
              </div>
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