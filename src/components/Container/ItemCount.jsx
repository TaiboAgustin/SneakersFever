import { Fragment, useState } from "react";
import './ItemCount.css'

const ItemCount = () =>{

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
                    <h1>{num}</h1>
                    <div className="btnCant">
                        <button onClick={decNum} > Delete </button>
                        <button onClick={incNum} > Add </button> 
                    </div>
                    <div className="btnAdd">
                        <button> Add to cart </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ItemCount