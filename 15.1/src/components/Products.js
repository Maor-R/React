import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../context/context";
import { products } from "../data";


function Products() {
  const {
    backgroundColor,
    h1Color,
  } = useGlobalContext();
  return (
    <div 
    style={{backgroundColor:backgroundColor}}><h1 style={{color:h1Color}}>
      Products</h1>
      <div className='link-container'>
        {products.map((product)=><Link className='product-title' to={`/product/${product.id}`}>{product.title}</Link>)}
      </div>
      </div>
  )
}

export default Products