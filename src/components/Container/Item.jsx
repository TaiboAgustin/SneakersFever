import React from "react";
import './Item.css'

const Item = ({ item }) => {
    return(
        <React.Fragment>
            <div className="container">
                <div className="card">
                    <img src={item.img} className="cardImg" alt="producto"></img>
                    <div className="cardData">
                        <h1 className="cardTitle">{item.name}</h1>
                        <p class="cardDescription">{item.colorway}</p>
                        <span className="cardPrice">{item.price}</span>
                        <a href="#" className="cardButton">See more</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item