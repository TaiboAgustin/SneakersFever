import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail'
import { SyncLoader } from 'react-spinners';
import './ItemDetailContainer.css';
import { CartContext } from '../../context/CartContext'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

function ItemDetailContainer(){
    const [checkout, setCheckout] = useState(false)
    const { addToCart} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [items, setItems] = useState({})

    useEffect(() => {
        const database = getFirestore()
        const itemCollection = doc(database, 'sneakers', id)
        setLoading(true)
        
        getDoc(itemCollection).then((snapshot) =>{
            if(snapshot.exists()){
                setItems({
                    id: snapshot.id, 
                    ...snapshot.data()
                })
            }
        })
        setLoading(false)       
}, [id]);

    const onAdd = (num) =>{
        setCheckout(true)
        addToCart(num, items)
    }

    return(
            <React.Fragment>
                {
                    loading 
                    ?
                        <div className ="loader">
                            <SyncLoader/>
                        </div>
                    :
                    <ItemDetail 
                        detail = {items} 
                        onAdd = {onAdd} 
                        checkout = {checkout} 
                    />
                }   
            </React.Fragment>    
    )
}

export default ItemDetailContainer