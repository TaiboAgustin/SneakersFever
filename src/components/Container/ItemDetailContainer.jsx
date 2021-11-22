import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail'
import { products } from './items.jsx';



function ItemDetailContainer(){
    const [detail, setDetail] = useState({})
    useEffect(() => {
        const bringProducts = new Promise ((resolve, reject)=>{
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
        bringProducts
        .then((res)=>{
            console.log(products)
            setDetail(res[0])   
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [detail])

    return(
        <React.Fragment>
            <ItemDetail detail = {detail} />
        </React.Fragment>
    )

}

export default ItemDetailContainer