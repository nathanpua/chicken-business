import React, { createContext, useState } from 'react'
import { MenuList } from '../helpers/MenuList';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < MenuList.length + 1;i++)
    {
        cart[i] = 0;
    }
    return cart;
};
 
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart)

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (let i = 1; i < MenuList.length + 1;i++)
        {
            if (cartItems[i] > 0){
                let itemInfo = MenuList.find((menuitem) => menuitem.id === Number(i))
                totalAmount += cartItems[i]*itemInfo.price
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
    };

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}));
    };

    const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:newAmount})); 
    }

    const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemCount, getTotalCartAmount}

    console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
