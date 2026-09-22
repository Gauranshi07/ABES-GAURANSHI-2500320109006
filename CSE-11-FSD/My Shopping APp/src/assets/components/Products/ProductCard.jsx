import React from 'react'
import '../../../App.css'
function ProductCard({props}) {
  return (
    <div id="product">
        <img src={props.images[0]} alt="" />
        <span id="title">{props.title}</span>
        <span id="price">₹{props.price}</span>
        <buttton id="btn">Add to Cart</buttton>
    </div>
  )
}

export default ProductCard