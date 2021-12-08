import React, { useState, useContext } from "react";

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    /*verificar si el producto ya esta en el carrito*/
    const isOnCart = (id) =>{
        const carrito = cart.find((i) => i.id === id);
    if (carrito !== undefined) {
        return true;
    } else {
        return false;
    }
    };

    /*agregar al carrito los productos*/
    const addToCart = (quantity, detail) =>{

        /*YA ESTA EL ITEM EN EL CARRITO??*/
        if(isOnCart(detail.id)){
            /*SI ESTA, SE SUMA LA CANTIDAD DE ITEMS QUE SE AGREGARON DEL MISMO TIPO*/
            sumarCantidad(quantity, detail)
            //console.log(cart)
        }
        else{
            /*SI NO ESTA, SE AGREGA AL ARRAY EL NUEVO PRODUCTO*/
            setCart([...cart, {...detail, quantity}])
        }
        
    }

    /*setear la cantidad de items que hay de un mismo tipo*/
    const sumarCantidad = (contador, detail) => {
        const quantity = [...cart];
        quantity.forEach((c) => {
            c.id === detail.id && (c.quantity += contador);
        });
    
        setCart(quantity);
    };

    /*eliminar un item del carrito*/
    const deleteFromCart = (idItem) =>{
        setCart(cart.filter((item) => item.id !== idItem))
    }

    /*vaciar todos los items del carrito*/
    const clearItems = () => setCart([]);

    /*calcular precio total de la compra*/
    const totalPrice = () => {
        const total = cart.reduce((precio, cantidad) => precio + cantidad.price * cantidad.quantity, 0);
        return total;
    };

    /*calcular la cantidad de items que hay en total en el carrito*/
    const totalQuantity = () => {
        const finalQuantity = cart.reduce((x, y) => x + y.quantity, 0);
        return finalQuantity;
    };

    return(
        <CartContext.Provider value={{ addToCart, cart, deleteFromCart, totalPrice, clearItems, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}



export default CartContext