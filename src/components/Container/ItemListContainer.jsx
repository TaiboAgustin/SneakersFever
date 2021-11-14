import React, {useState} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList'
import ItemCount from './ItemCount';
import { products } from './items.jsx';



function ItemListContainer(props){
    const [items, setItems] = useState([])
    const bringProducts = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
    bringProducts
    .then((res)=>{
        console.log(products)
        setItems(res)   
    })
    .catch((error)=>{
        console.log(error)
    })





    return(
        <React.Fragment>
            <div className="containerImg">
                <p className="cardText">{props.text}</p>
            </div>
            <ItemList items={items} />
            <ItemCount/>
        </React.Fragment>
    )
}

export default ItemListContainer