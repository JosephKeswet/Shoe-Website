import React, { useEffect, useState } from 'react'
import "../styles/Nav.css"
import {Link } from 'react-router-dom'
// import { useContext } from 'react';
// import CartContext from '../CartContext';


const Nav = () => {
  const [show,handleShow] = useState(false);


  // This function toggles the state of the navbar background color
  const transitionNavBar = ()=>{
    if(window.scrollY > 10){
      handleShow(true);
    }else{
      handleShow(false)
    }
  }

  // This runs as soon as the component mounts and when the user scrolls down
  useEffect(()=>{
    window.addEventListener("scroll" , transitionNavBar)
    // clean up function
    return ()=> window.removeEventListener("scroll", transitionNavBar)
  },[])

  // const {shoes} = useContext(CartContext);
  // const {totalPrice} = useContext(CartContext)

  return (
    <div className={`nav__fixed ${show && 'nav__green'}`} >
      
      <div className='route__home'>
        <div className="site__logo">Shoes & Shoes</div>
        <div>
        <ul>
            <Link to="/" className='home__route'> <li>Home</li></Link>
            <Link to="/signup" className='account__route'><li>Account</li></Link>
            <Link to="/help" className='help__route'><li>Help</li></Link>
        </ul>
        </div>
    <div>
       <Link to='/myCart'> <button className='cart__button'>MY CART</button> </Link>
    </div> 
        </div>

        {/* <h1>Total Shoes: {shoes.length}</h1>
        <h1>Total Price:{totalPrice}</h1> */}
        
    

  
        
                   
    </div>
  )
}

export default Nav