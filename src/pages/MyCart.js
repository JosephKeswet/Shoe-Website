import React from 'react'
import { Link } from 'react-router-dom'
import Carts from '../components/Carts'
import CardData from '../Data/CardData'
import '../styles/Carts.css'
const MyCart = () => {

  return (
    <div className='cart__page'>
        
        <h1>My Cart</h1>
        <Carts/>
        
       
    </div>
  )
}

export default MyCart

