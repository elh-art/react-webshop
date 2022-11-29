import React from 'react'

const Infobox = ({item}) => {
  return (
    <>
      <div key={item.id} className="infobox">
          <div className="infobox-container">
            <img src={item.pic1} className="me-3" alt={`${item.header}` + " icon"}/>        
            <img className="img-top me-3" src={item.pic2} alt={`${item.header}` + " icon"}/>
          </div>
          <div>
            <h3><strong>{item.header}</strong></h3>
            <p>{item.text}</p>
          </div>
      </div>
    </>
  )
}

export default Infobox