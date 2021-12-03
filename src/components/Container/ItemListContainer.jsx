import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList'
import { products } from './items.jsx';
import {useParams} from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

function ItemListContainer(props){
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        setLoading(true)
        const bringProducts = new Promise ((resolve, reject)=>{
            setTimeout(() => {
                setLoading(false)
                resolve(products)
            },2000);
        })
        bringProducts
        .then((res)=>{
            const filtrar = res.filter(
                (prod) => prod.categoryId === `${categoryId}`
            )
            categoryId === undefined ? setItems(res) : setItems(filtrar)
            console.log(products)       
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [categoryId]);
    




    return(
        <React.Fragment>
            {
                loading
                ? 
                    <div className ="loader">
                        <SyncLoader/>
                    </div>
                :
                    <><div className="containerImg">
                        <p className="cardText">{props.text}</p>
                    </div><ItemList items={items} /></>
            }    
        </React.Fragment>
    )
}

export default ItemListContainer