import "./style.css";
import logo from "../../img/logo.png";

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt="logo" id="footer-logo"></img>
            <div className="links-column">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/events">Events</a>
                <a href="/community">Community</a>
                <a href="/contact">Contact</a>
            </div>
            <p>connect.herai@gmail.com</p>
            <p href="/contact" id="contact-btn">
                Contact Us
            </p>
        </div>
    );
};

export default Footer;
