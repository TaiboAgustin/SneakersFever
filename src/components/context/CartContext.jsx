import React, { useState } from "react";

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addToCart = (quantity, detail) =>{
        setCart([...cart, {...detail, quantity}])
        console.log(cart)
    }
    return(
        <CartContext.Provider value={{ addToCart, cart }}>
            {children}
        </CartContext.Provider>
    )
}