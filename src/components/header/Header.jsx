import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import  CartWidget  from './CartWidget.jsx'
import './Header.css';

const Header = () =>{
    const element = <FontAwesomeIcon icon={faBars} /> 
    return(
        <nav>
            <label className="logo">SneakersFever</label>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <CartWidget />
            </ul>
            <label id="icon">
                <i>{element}</i>
            </label>
        </nav>
    )
}

export default Header