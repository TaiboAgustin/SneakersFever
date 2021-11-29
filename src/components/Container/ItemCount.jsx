import { Fragment, useState } from "react";
import './ItemCount.css'

const ItemCount = ({ detail, onAdd }) =>{

    const [num, setNum] = useState(0)

    const incNum = () =>{
        setNum(num + 1)
    }

    const decNum = () =>{
        if(num > 0){
            setNum (num - 1)
        }
        else{
            setNum(0);
        }
    }
     
    return(
        <Fragment>
            <div className="counterContainer">
                <div className="counterMid">
                    <h1 className="productDetail">Quantity</h1>
                    <h1 className="num">{num}</h1>
                    <div className="btnCant">
                        <button className="buttonCounter" onClick={decNum} > Delete </button>
                        <button className="buttonCounter" onClick={incNum} disabled={num === detail.stock}>Add </button> 
                    </div>
                    <div className="btnAdd">
                        <button className={num === 0 ? "buttonDisabled" : "buttonCounter"} onClick={() =>onAdd(num)} disabled={num === 0}> Add to cart </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ItemCount