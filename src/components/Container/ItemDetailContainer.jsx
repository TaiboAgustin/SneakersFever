import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail'
import { products } from './items.jsx';
import { SyncLoader } from 'react-spinners';
import './ItemDetailContainer.css'


function ItemDetailContainer(){
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [detail, setDetail] = useState({})
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
            const producto = res.find(
                (prod) => prod.id === parseInt(`${id}`)
            )
            setDetail(producto)
            console.log(products)   
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [id])

    return(
            <React.Fragment>
                {
                    loading 
                    ?
                        <div className ="loader">
                            <SyncLoader/>
                        </div>
                    :
                    <ItemDetail detail = {detail} />
                }   
            </React.Fragment>    
    )

}

export default ItemDetailContainer