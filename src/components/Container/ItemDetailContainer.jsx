import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail'
import { products } from './items.jsx';



function ItemDetailContainer(){
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    useEffect(() => {
        const bringProducts = new Promise ((resolve, reject)=>{
            setTimeout(() => {
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
            <ItemDetail detail = {detail} />
        </React.Fragment>
    )

}

export default ItemDetailContainer