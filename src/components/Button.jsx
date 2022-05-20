import React from 'react'
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../features/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';



const Button = ({product}) => {
    const [buttonText, setButtonText] = useState('+')
    const check =  <FontAwesomeIcon icon={faCircleCheck} /> 

    const handleTextChange = ()=>{
        setButtonText(check)
    }

    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
      dispatch(addToCart(product))
      handleTextChange()

    }
  return (
    <div> 
        
      

        <button className='add__cart' onClick={() => handleAddToCart(product)}>{buttonText}</button></div>
  )
}

export default Button