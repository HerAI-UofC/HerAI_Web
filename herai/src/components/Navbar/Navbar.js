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
                <NavLink
                    className={"link"}
                    to="/"
                    exact
                    activeClassName="active"
                >
                    Home
                </NavLink>
                <NavLink
                    className={"link"}
                    to="/about"
                    activeClassName="active"
                >
                    About
                </NavLink>
                <NavLink
                    className={"link"}
                    to="/events"
                    activeClassName="active"
                >
                    Events
                </NavLink>
                <NavLink
                    className={"link"}
                    to="/links"
                    activeClassName="active"
                >
                    Links
                </NavLink>
                <NavLink
                    className={"link"}
                    to="/contact"
                    activeClassName="active"
                >
                    Contact
                </NavLink>
            </div>

            <NavLink className={"login"} to="/login">
                Login
            </NavLink>
        </nav>
    );
};

export default Navbar;
