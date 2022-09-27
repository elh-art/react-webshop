import React from 'react'

const Card = ({product, products}) => {
  return (
    <>
      <div key={product.id} className={"box-arrival grid-topsell" + `${products.length - product.id}`}>
        <div className="box-dark"></div>
        {product.new && <h3 className="new-product">NEW</h3>}
        {product.hotProduct && <h3 className="hot-product">HOT</h3>}
        {product.topSeller ? 
          <img className="topsellers-img" src={product.image} alt={product.name} /> : 
          <img src={product.image} alt={product.name} />}
        {product.banner && <img className="corp-logo" src={product.banner} alt={"A logo of the company " + product.banner}/>}
      
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
        <div className="five-stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
        </div>
      </div>
    </>
  )
}

export default Card