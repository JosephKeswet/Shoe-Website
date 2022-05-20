// import { createContext, useState } from "react";
// const CartContext = createContext();

// export function CartProvider({children}){

//     const [shoes,setShoes] = useState([]);
//     const totalPrice = shoes.reduce((acc,curr) => acc + curr.price,0)

//     const addToCart =(shoeName,price,shoeBrand,id)=>{

//         setShoes((prevState) => [...prevState,{shoeName,price,shoeBrand}]);
//     };  


   

//     return(
//         <CartContext.Provider value={{ shoes , addToCart,totalPrice}}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartContext