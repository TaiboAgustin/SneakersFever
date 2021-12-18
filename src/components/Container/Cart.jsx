import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from '../../context/CartContext'
import './Cart.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import Order from './Order'

const Cart = () => {
    const cartRemove = <FontAwesomeIcon icon={faTrashAlt} />
    const {cart, totalPrice, getUser, deleteFromCart, clearItems, totalQuantity} = useContext(CartContext)
    const [goTicket, setGoTicket] = useState(false)
    const [form, getForm] = useState ({nombre:'', email:''})

    const formComplete = (e) =>{
        const {name, value} = e.target
        getForm({
            ...form,
            [name]: value
        })
    }
    
    const date = new Date()

    const finishBuy = () =>{
        getUser(form)
        const database = getFirestore()
        const ref = collection (database, 'ticket')
        const newOrder = {
            buyer: form.email,
            items: cart,
            date: date,
            total: totalPrice()
        }
        addDoc(ref, newOrder)
        setGoTicket(true)
        clearItems()
    }

        return (
            <React.Fragment>
            {!goTicket ?(
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
                                    <span className="remove" onClick={clearItems}>Remove all items</span>
                                </p>
                                    <form
                                        className="formTicket"
                                        method="POST"
                                        onSubmit={finishBuy}
                                        style={{
                                            margin: '15px 0px'
                                        }}
                                    >
                                    <input
                                        className="inputTicket"
                                        onChange={formComplete}
                                        type="email"
                                        name='email'
                                        placeholder='Enter your email address'
                                    />
                                    <input
                                        className="inputTicket"
                                        onChange={formComplete}
                                        type="text"
                                        name='name'
                                        placeholder='Enter your full name'
                                    />
                                    <button
                                        className={form.email=== '' && form.name=== '' ? "buttonFinishBuyDisabled" : "buttonFinishBuy"}
                                        disabled={
                                            cart?.length === 0 ||
                                            form.name === '' ||
                                            form.email === ''
                                        }
                                    >
                                        {
                                            form.email=== '' || form.name=== '' ? 'Complete with your personal data' : 'Finish buying'
                                        }
                                        
                                    </button>
                                    </form>
                                    
                                
                            </div>
                        
                </div>     
            )
            : 
            (
                <Order />
            )
            }    
            
            </React.Fragment>
            
        )
    }
    

export default Cart
