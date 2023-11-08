import "./style.css";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../img/logo.png";

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="not found"></img>
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
                    to="/contact"
                    activeClassName="active"
                >
                    Contact
                </NavLink>
            </div>
            <button>
                <NavLink className={"login"} to="/login">
                    Login
                </NavLink>
            </button>
        </nav>
    );
};

export default Navbar;
