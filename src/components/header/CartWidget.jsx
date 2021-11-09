import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css';

const CartWidget = () =>{
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return(
        <li className="cart"><a href="#"><i>{cartIcon}</i></a></li>
    )
}

export default CartWidget
