import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import './Order.css'
import Message from "./Message";

const Order = () => {
    const [order, setOrder] = useState ([])
    const { userEmail } = useContext(CartContext)
    const { email } = userEmail

    useEffect(() => {
        const database = getFirestore()
        const ref = query(collection(database, 'ticket'), orderBy('date'))
        getDocs(ref).then((snapshot) => {
            const buyOrder = snapshot.docs.map((doc) => {
                const data = doc.data()
                const { date } = data
                const buyDate = new Date(date.seconds * 1000)
                const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES', {
                    dateStyle: 'full',
                    timeStyle: 'short'
                }).format(buyDate)
                return {
                    id: doc.id,
                    ...data,
                    date: normalizedCreatedAt
                }
            })
            setOrder(buyOrder.filter((x) => x.buyer === email))
        })
    }, [email])
    console.log(order)

    return(
        <React.Fragment>
            {order?.length=== 0?(
                <h1 className="ticketText">Loading...</h1>
            ):(
                <React.Fragment>
                    <h1 className="ticketText">Thanks for your buy, here are your buy ticket:</h1>
                    {order.map((ord) => {
                        return(
                            <Message key={ord.id} ord={ord} />
                        )
                        
                    })}
                    <Link to='/'><button className="buttonBackToShop"><h3>Continue shopping</h3></button></Link>
                </React.Fragment>
            )
            }
            
        </React.Fragment>
    )
}

export default Order