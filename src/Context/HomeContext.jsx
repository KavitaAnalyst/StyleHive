/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React ,{ createContext, useState } from 'react';
import all_product from "../Components/Assets/all_product";





export const HomeContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const HomeContextProvider = (props)=>{
    const[cartItems,setCartItems] = useState(getDefaultCart());
  
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
      
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // const getTotalAmount =()=>{
    //     setCartItems((prev)=>)
    // }
    const contextValue = {all_product,cartItems,addToCart,removeFromCart}

    return(
        <HomeContext.Provider value = {contextValue}>
        {props.children}
   


            </HomeContext.Provider>
            
    )
}

export default HomeContextProvider;