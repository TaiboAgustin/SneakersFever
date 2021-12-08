import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartRemove = <FontAwesomeIcon icon={faTrashAlt} />
    const {cart, totalPrice, deleteFromCart, clearItems, totalQuantity} = useContext(CartContext)
    if(totalPrice()===0){
        return(
            <React.Fragment>
                <div className="bannerBackToShop">
                    <div className="textBanner">
                        <h3>Empty shopping cart</h3>
                    </div>
                    <Link to='/'><button className="buttonBackToShop"><h3>Back to shop</h3></button></Link>
                </div>
            </React.Fragment>
        )
    }
    else{
        return (
            <React.Fragment>
                <div className="cartContainer">
                <h1>Checkout</h1>
                    <div className="cartItems">
                        {cart.map((item)=>(
                                <div className="products" key={item.id}>
                                    <div className="product">
                                        <img src={item.imgDetail}></img>
                                        <div className="productInfo">
                                            <h3 className="productName">{item.name}</h3>
                                            <h2 className="productDetail">{item.colorway}</h2>
                                            <h2 className="productDetail">${item.price}</h2>
                                            <p className="productQuantity">Quantity: {item.quantity}</p>
                                            <p className="productRemove">
                                                {cartRemove}
                                                <span className="remove" onClick={() => deleteFromCart(item.id)}>Remove item</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="cartTotal">
                                <p>
                                    <span>Total price</span>
                                    <span>${totalPrice()}.-</span>
                                </p>
                                <p>
                                    <span>Items on bag</span>
                                    <span>{totalQuantity()}</span>
                                </p>
                                <p className="productRemoveAll">
                                    {cartRemove}
                                    <span className="remove" onClick={clearItems}>Remove all items</span>
                                </p>
                                <a href="#">Finish buying</a>
                            </div>
                        
                </div>     
            </React.Fragment>
        )
    }
    
}
export default Cart
