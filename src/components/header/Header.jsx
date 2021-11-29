import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import  CartWidget  from './CartWidget.jsx'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () =>{
    const element = <FontAwesomeIcon icon={faBars} /> 
    return(
        <nav>
            <Link to='/'><label className="logo">SneakersFever</label></Link> 
            <ul> 
                <Link to='/'>Home</Link>
                <Link to='/category/nike'>Nike</Link>
                <Link to='/category/jordan'>Jordan</Link>
                <Link to='/category/adidas'>Adidas</Link>
                <Link to='/category/morebrands'>More Brands</Link>
                <Link to='/cart'><CartWidget/></Link>
            </ul>
            <label id="icon">
                <i>{element}</i>
            </label>
        </nav>
    )
}

export default Header