import React from "react";
import Item from './Item'
import './ItemList.css'

function ItemList ({ items }){
    return(
        <React.Fragment>
            <div className="containerGrid">
            {items.map((item)=>(
                <Item key={item.id} item={item}/>
            ))}
            </div>   
        </React.Fragment>
    )
}

export default ItemList