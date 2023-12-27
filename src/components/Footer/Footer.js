import "./style.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo" id="footer-logo"></img>
            <div className="links-column">
                <NavLink to="/HerAI_Web" end>
                    Home
                </NavLink>
                <NavLink to="/HerAI_Web/about">About</NavLink>
                <NavLink to="/HerAI_Web/events">Events</NavLink>
                <NavLink to="/HerAI_Web/community">Community</NavLink>
                <NavLink to="/HerAI_Web/contact">Contact</NavLink>
            </div>
            <p>connect.herai@gmail.com</p>
            <NavLink to="/HerAI_Web/contact" id="contact-btn">
                Contact Us
            </NavLink>
        </div>
    );
};

export default Footer;
