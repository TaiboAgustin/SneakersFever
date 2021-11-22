import './ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ItemCount from './ItemCount'
import React from 'react'

const ItemDetail = ({ detail }) => {
    const starIcon = <FontAwesomeIcon icon={faStar} />
    return (
        <React.Fragment>
            <div className = "mainWrapper">
                <div className= "container">
                    <div className= "productDiv">
                        <div className= "productDivLeft">
                            <div className= "imgContainer">
                                <img src= {detail.imgDetail} className="imgDetail" alt="producto"></img>
                                <img src= {detail.imgDetail2} className="imgDetail" alt="producto"></img>
                            </div>
                        </div>
                        <div className= "productDivRight">
                            <span className= "productName">{detail.name}</span>
                            <span className= "productColorway"> {detail.colorway} </span>
                            <p className= "productPrice"> {detail.price} </p>
                            <div className= "productRating">
                                <span>{starIcon}</span>
                                <span>{starIcon}</span>
                                <span>{starIcon}</span>
                                <span>{starIcon}</span>
                                <span>{starIcon}</span>
                            </div>
                            <p className= "productDescription"> {detail.description}</p>
                            <ItemCount />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        
    )
}

export default ItemDetail