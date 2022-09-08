import React from 'react'
import '../css/ShoppingGrid.css'

const ShoppingGrid = () => {
  return (
    <>
      <div className="shopping-grid d-flex justify-content-center">
        <div className="container grid"> 
          <div className="grid-item1">
            <div className="grid-pack">
              <span>Men</span> 
              <h3>18 products</h3> 
            </div> 
          </div>
          <div className="grid-item2">
            <div className="grid-pack">
              <span>Women</span> 
              <h3>18 products</h3>
            </div>
          </div>
          <div className="grid-item3"> 
            <div className="grid-pack">
              <span>Kids</span> 
              <h3>18 products</h3>
            </div>
          </div>  
          <div className="grid-item4">
            <div className="grid-pack">
              <span>Shoes</span> 
              <h3>18 products</h3> 
            </div>
          </div>
          <div className="grid-item5">
            <div className="grid-pack">
              <span>Hats</span> 
              <h3>18 products</h3> 
            </div>
          </div>
          <div className="grid-item6">
            <div className="grid-pack">
              <span>Sunglasses</span> 
              <h3>18 products</h3> 
            </div>
          </div>
          <div className="grid-item7">
            <div className="grid-pack">
              <span>Watches</span> 
              <h3>18 products</h3> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingGrid