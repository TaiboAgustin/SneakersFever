import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './Cart.css'

const Cart = () => {
    const {cart} = useContext(CartContext)
    return (
        <React.Fragment>
            {cart.map((item)=>(
                <div key={item.id}>
                    <img src={item.imgDetail}></img>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </React.Fragment>
    )
}
export default Cart
