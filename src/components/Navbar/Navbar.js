import "./style.css";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../img/logo.png";

const Navbar = () => {
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector("nav");
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    return (
        <nav>
            <img id="nav-logo" src={logo} alt="not found"></img>
            <div className="links">
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

            <NavLink className={"login"} to="/HerAI_Web/login">
                Login
            </NavLink>
        </nav>
    );
};

export default Navbar;
