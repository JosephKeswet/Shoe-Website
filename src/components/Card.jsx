// import React from 'react'
import '../styles/Cards.css'
import '../styles/TopDealsPage.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Button from './Button'
import DropDown from './DropDown'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
// import { useContext } from 'react'
// import CartContext from '../CartContext'




const Card = ({details,shoeName,price}) => {

 
  
  return (
    <>
      <Swiper
    slidesPerView={3}
    spaceBetween={10}
    slidesPerGroup={3}
    effect="fade"
    loop={true}
    loopFillGroupWithBlank={true}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
    
    >
    {details.map((product)=>(
      <div className='swiper__container'>
        <SwiperSlide key={product.id} className="swiper" >
               <div className="grid__container">
                  <img src={product.img} alt="" />
                  <h3 className="shoe__brand">{product.shoeBrand}</h3>
                  <h3 className="shoe__name">{product.shoeName}</h3>
                  <h3 className="price"> $ {product.price} </h3>
                  </div> 
           {/* <div className='card__content '>
          <img src={product.img} alt="" />
          <div className='card__text'>
          <h3> {product.shoeBrand} </h3>
          <h3> {product.shoeName} </h3>
          <h3> ${product.price} </h3>
        <Button product={product}/> */}

      {/* </div> */}
      </SwiperSlide>
      </div>
    ))};
      </Swiper>

    </>
  )
}

export default Card