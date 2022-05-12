import React from 'react'
import '../styles/Cards.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
    {props.details.map((value,index)=>(
    
           <div className='card__content' key={index}>
          <img src={value.img} alt="" />
          <div className='card__text'>
          <h3> {value.shoeBrand} </h3>
          <h3> {value.shoeName} </h3>
          <h3> {value.price} </h3>
          </div>
      </div>
    
 
    ))};
    </>
  )
}

export default Card