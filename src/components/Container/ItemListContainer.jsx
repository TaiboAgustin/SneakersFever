import React from 'react';
import './ItemListContainer.css';
import ItemCount from './ItemCount';

function ItemListContainer(props){
    return(
        <React.Fragment>
            <div className="containerImg">
                <p className="card">{props.text}</p>
            </div>
            <ItemCount/>
        </React.Fragment>
    )
}

export default ItemListContainer