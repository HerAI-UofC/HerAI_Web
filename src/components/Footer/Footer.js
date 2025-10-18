import "./style.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo" id="footer-logo"></img>
            <div className="links-column">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <p>connect.herai@gmail.com</p>
            <NavLink to="/contact" id="contact-btn">
                Contact Us
            </NavLink>
        </div>
    );
};

export default Footer;
