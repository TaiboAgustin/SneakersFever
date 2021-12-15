import React from 'react';
import { FaFacebookF, FaTwitterSquare, FaLinkedinIn, FaGithubSquare } from "react-icons/fa";
import './Footer.css';


const Footer = () => {
    return (
        <React.Fragment>
            <footer>
            <div className="footer-content">
                    <h3>Sneakers Fever</h3>
                    <p>Buenos Aires, Argentina</p>
                    <ul className="socials">
                        <li><a href="https://www.facebook.com/agustin.taibo/" target="_blank" className="facebookFooter"> <FaFacebookF /> </a></li>
                        <li><a href="https://twitter.com/agus_taibo" target="_blank" className="twitterFooter"> <FaTwitterSquare /> </a></li>
                        <li><a href="https://www.linkedin.com/in/taibo-cruz-agustin/" target="_blank" className="linkedInFooter"> <FaLinkedinIn /> </a></li>
                        <li><a href="https://github.com/TaiboAgustin" target="_blank" className="gitHubFooter"> <FaGithubSquare /> </a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>Website designed and developed by <span>Agustin Taibo</span></p>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;