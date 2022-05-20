import React from 'react'
import '../styles/Cards.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Button from './Button'
// import { useContext } from 'react'
// import CartContext from '../CartContext'




const Card = ({details,shoeName,price}) => {

 
  
  return (
    <>
    {details.map((product)=>(
    
           <div className='card__content' key={product.id}>
          <img src={product.img} alt="" />
          <div className='card__text'>
          <h3> {product.shoeBrand} </h3>
          <h3> {product.shoeName} </h3>
          <h3> ${product.price} </h3>
        <Button product={product}/>

          </div>
      </div>
    
 
    ))};
    </>
  )
}

export default Card