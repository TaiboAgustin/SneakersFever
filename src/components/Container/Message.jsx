import React from "react";
import './Message.css'

const Message = ({ ord }) =>{
    const productName = ord.items.map((ticket) => ticket.name)
    const productPrice = ord.items.map((ticket) => ticket.price)
    const { buyer } = ord


    return (
        <React.Fragment>
            <div className="containerMessage">
                <h2>Buy Date: <span>{ord.date}</span> </h2>
                <h2>Product Name: <span>{productName}</span></h2>
                <h2>Price: <span>${productPrice}</span></h2>
                <h2>Buy Id: <span>{ord.id}</span></h2>
                <h2>Email: <span>{buyer}</span></h2>
            </div>    
        </React.Fragment>
    )
}

export default Message;