import React, { useEffect, useState } from 'react'
import "../styles/Nav.css"
import {Link } from 'react-router-dom'

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

  return (
    <div className={`nav__fixed ${show && 'nav__green'}`} >
      
      <div className='route__home'>
        <div className="site__logo">Shoes & Shoes</div>
        <ul>
            <Link to="/" className='home__route'> <li>Home</li></Link>
            <Link to="/test" className='account__route'><li>Account</li></Link>
            <Link to="/help" className='help__route'><li>Help</li></Link>
        </ul>

        <button className='cart__button'>MY CART</button>
        </div>
        <div className="search__input">
          <form action="">
            <input type="text" className='search__field' placeholder='' />
            {/* <button className='search__button'>SEARCH</button> */}
            <input type="submit" className='search__button'  value="Search" />
            </form>
      </div>

  
        
                   
    </div>
  )
}

export default Nav