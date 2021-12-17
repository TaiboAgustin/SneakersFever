import React from "react";

const Message = ({ ord }) =>{
    const productName = ord.items.map((ticket) => ticket.name)
    const { buyer } = ord


    return (
        <React.Fragment>
            <h2>Buy Id: {ord.id}</h2>
            <h2>Buy Date: {ord.date} </h2>
            <h2>Product Name: {productName}</h2>
            <h2>Email: {buyer}</h2>
        </React.Fragment>
    )
}

export default Message;