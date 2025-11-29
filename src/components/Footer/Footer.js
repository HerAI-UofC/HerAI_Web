import "./style.css";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faLinktree } from '@fortawesome/free-brands-svg-icons';

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
                <NavLink to="/community">Community</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            
            <div>
                <p>connect.herai@gmail.com</p>
                <div id="socialsFooter">
                    <a href="https://www.instagram.com/herai_uofc/">
                        <FontAwesomeIcon className="iconFooter" icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/company/herai-women-in-ai-ml/">
                        <FontAwesomeIcon className="iconFooter" icon={faLinkedin} />
                    </a>
                    <a href="https://discord.com/invite/FXvjg9jUga">
                        <FontAwesomeIcon className="iconFooter" icon={faDiscord} />
                    </a>
                    <a href="https://linktr.ee/HerAI_Women_in_AIML?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGniBxV0skNiZdWuGcoXv86g5too3czNwbRzpehLW70d69TsG6X2AhoK2__xp0_aem_huijswr1K4xE9SRWoEZ3wQ">
                        <FontAwesomeIcon className="iconFooter" icon={faLinktree} />
                    </a>
                </div>
            </div>
            <NavLink to="/contact" id="contact-btn">
                Contact Us
            </NavLink>
        </div>
    );
};

export default Footer;
