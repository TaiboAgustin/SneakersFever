import React from 'react';
import './ItemListContainer.css';

function ItemListContainer(props){
    return(
        <React.Fragment>
            <div className="containerImg">
                <p className="card">{props.text}</p>
            </div>
        </React.Fragment>
    )
}

export default ItemListContainer