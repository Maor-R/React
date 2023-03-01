import React from 'react'
import { Link } from 'react-router-dom';
import { products } from "../data";


function Products() {

  return (
    <div 
    ><h1 >
      Products</h1>
      <div className='link-container'>
        {products.map((product)=><Link className='product-title' to={`/product/${product.id}`}>{product.title}</Link>)}
      </div>
      </div>
  )
}

export default Products