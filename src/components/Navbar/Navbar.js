import "./style.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import React from "react";
import logo from "../../img/logo.png";

const Navbar = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const navbarRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setNavVisible(false);
    }, [location]);

    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                navbarRef.current.classList.add("scrolled");
            } else {
                navbarRef.current.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav ref={navbarRef}>
            <div className="mobile-menu">
                <img id="nav-logo" src={logo} alt="not found"></img>
                <button onClick={toggleNav} className="menu-icon">
                    &#9776;
                </button>
            </div>
            <div className={`links ${isNavVisible ? "show" : ""}`}>
                <NavLink className={"link"} to="/HerAI_Web" end>
                    Home
                </NavLink>
                <NavLink className={"link"} to="/HerAI_Web/about">
                    About
                </NavLink>
                <NavLink className={"link"} to="/HerAI_Web/events">
                    Events
                </NavLink>
                <NavLink className={"link"} to="/HerAI_Web/community">
                    Community
                </NavLink>
                <NavLink className={"link"} to="/HerAI_Web/contact">
                    Contact
                </NavLink>
            </div>

            <NavLink
                className={`login ${isNavVisible ? "show" : ""}`}
                to="/HerAI_Web/login"
            >
                Login
            </NavLink>
        </nav>
    );
};

export default Navbar;
