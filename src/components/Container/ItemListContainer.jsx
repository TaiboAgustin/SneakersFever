import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList'
import { products } from './items.jsx';
import {useParams} from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import { getFirestore, collection, getDocs, doc, QuerySnapshot } from 'firebase/firestore'

function ItemListContainer(props){
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        const database = getFirestore()
        const itemCollection = collection(database, 'sneakers')
        setLoading(true)
        getDocs(itemCollection).then((snapshot) =>{
            const prod = snapshot.docs.map((doc) =>{
                return{
                    id: doc.id,
                    ...doc.data(),
                }
            })
            const categories = prod.filter((i) => i.categoryId === categoryId)
            categoryId === undefined ? setItems(prod) : setItems(categories)
        }).finally(() =>{
            console.log(categoryId)
            setLoading(false)
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