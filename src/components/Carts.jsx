import React from 'react'
import { addToCart, decreaseCart, removeFromCart } from '../features/cartSlice'
import { useDispatch , useSelector} from 'react-redux'

import '../styles/Carts.css'





const Carts = () => {
const cart = useSelector((state) => state.cart);
const dispatch = useDispatch();
   const handleDecreaseCart = (cartItem)=>{
      dispatch(decreaseCart(cartItem))
    }

    const handleIncreaseCart = (cartItem) =>{
      dispatch(addToCart(cartItem))
    }

      const handleRemoveFromCart = (cartItem)=>{
      dispatch(removeFromCart(cartItem))
    }

  return (
    <div className='cart__items'>
    
      {cart.cartItems?.map(cartItem =>(
        <div className='cart__item'>
          <div className='cart__product'>
            <img src={cartItem.img} alt={cartItem.shoeName}/>
          </div>
          <div className="cart__item__content">
            <h2>{cartItem.shoeBrand}</h2>
            <h4>{cartItem.shoeName}</h4>
            <p>Your shoe will be delivered through JLS Express courier service from our store  at Califonia, USA to Los Angeles USA.</p>
            <h2 className='arrival__date'>ARRIVAL:AUGUST {cartItem.id}</h2>
          </div>
          <div className="cart__item__price">
              <h1>${cartItem.price * cartItem.cartQuantity}</h1>
              <div className="cart__item__quantity">
            <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
            <div className="item__count">{cartItem.cartQuantity}</div>
          <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
         </div>

         <h3 onClick={()=> handleRemoveFromCart(cartItem)}>Remove Item</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carts