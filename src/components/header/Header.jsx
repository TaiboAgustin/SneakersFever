import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const header = () =>{
    const element = <FontAwesomeIcon icon={faBars} /> 
    return(
        <nav>
            <label className="logo">SneakersFever</label>
            <ul>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <label id="icon">
                <i>{element}</i>
            </label>
        </nav>
    )
}

export default header