import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Carts from '../components/Carts'
import CardData from '../Data/CardData'
import '../styles/Carts.css'
// import { addToCart, decreaseCart, removeFromCart } from '../features/cartSlice'
// import { useContext } from 'react'
// import CartContext from '../CartContext'

const MyCart = () => {
    // const {  shoes } = useContext(CartContext)
    // const dispatch = useDispatch()
    // const cart = useSelector((state) => state.cart)
    // const handleRemoveFromCart = (cartItem)=>{
    //   dispatch(removeFromCart(cartItem))
    // }

    // const handleDecreaseCart = (cartItem)=>{
    //   dispatch(decreaseCart(cartItem))
    // }

    // const handleIncreaseCart = (cartItem) =>{
    //   dispatch(addToCart(cartItem))
    // }

  return (
    <div className='cart__page'>
        
        <h1>My Cart</h1>
        <Carts/>
        
       
    </div>
  )
}

export default MyCart

//  {/* {cart.cartItems.length === 0 ? (
//           <div className="card__empty">
//             <h1>Your Cart is Currently Empty</h1>
//             <div className="start__shopping">
//             <Link to="/">
//               Start Shopping
//             </Link>
//             </div>
//           </div>
     
//         ) : (
//           <div>
//             <div className="titles">
//               <h3 className="product__title">Product</h3>
//               <h3 className="price">Price</h3>
//               <h3 className="quantity">Quantity</h3>
//               <h3 className="total">Total</h3>

//               <div className="cart__items">
//                 {cart.cartItems?.map(cartItem =>(
//                   <div className="cart__item" key={cartItem.id}>
//                       <div className="cart__product">
//                         <img src={cartItem.img} alt={cartItem.name} />
//                         <div>
//                           <h3>{ cartItem.shoeName }</h3>
//                           <h3>{ cartItem.shoeBrand }</h3>
//                           <button onClick={()=> handleRemoveFromCart(cartItem)}>Remove Item</button>
                        
//                         </div>
//                       </div>
//                       <div className="cart__productPrice">
//                         ${cartItem.price}
//                       </div>
//                       <div className="card__productQuantity">
//                         <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
//                         <div className="item__count">{cartItem.cartQuantity}</div>
//                         <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
//                       </div>

//                       <div className="cart__product__total__price">
//                         ${cartItem.price * cartItem.cartQuantity}
//                       </div>
//                       <div className="cart__summary">
//                           <button>Clear Cart</button>
//                       </div>
//                   </div>
//                   )
//                   )}
//               </div>
//             </div>
//           </div>
//         )} */}
