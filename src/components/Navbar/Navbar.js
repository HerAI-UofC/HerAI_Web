import "./style.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import React from "react";
import logo from "../../img/logo.png";

const Navbar = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false); // Add state for login status
    const navbarRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        setNavVisible(false);
    }, [location]);

    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    };

    const toggleLogin = async () => {
        try {
            //console.log("CALLED");
            await fetchAuthSession();
            setLoggedIn(true);
        } catch {
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        toggleLogin();
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
    }, [location.pathname]);

    // Dropdown component
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const handleMouseEnter = () => {
        setDropdownOpen(true);
    }
    const handleMouseLeave = () => {
        setDropdownOpen(false);
    }


    return (
        <nav ref={navbarRef}>
            <div className="mobile-menu">
                <NavLink to="/" end>
                    <img id="nav-logo" src={logo} alt="not found" style={{ cursor: "pointer" }}></img>
                </NavLink>
                <button onClick={toggleNav} className="menu-icon">
                    &#9776;
                </button>
            </div>
            <div className={`links ${isNavVisible ? "show" : ""}`}>
                <NavLink className={"link"} to="/" end>
                    Home
                </NavLink>
                <NavLink className={"link"} to="/about">
                    About
                </NavLink>
                <NavLink className={"link"} to="/events">
                    Events
                </NavLink>
                <div className="resources" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <button className="resources-btn">
                    Resources <span className={isDropdownOpen ? 'arrow-up' : ''}>&#11167;</span>
                    </button> 
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <NavLink className={"link"} to="/studyPlan"> 
                                Study Plan
                            </NavLink>
                        </div>
                    )}
                </div>
                <NavLink className={"link"} to="/community">
                    Community
                </NavLink>
                <NavLink className={"link"} to="/contact">
                    Contact
                </NavLink>
            </div>

            {isLoggedIn ? (
                <NavLink
                    className={`login ${isNavVisible ? "show" : ""}`}
                    to="/profile"
                >
                    Profile
                </NavLink>
            ) : (
                <NavLink
                    className={`login ${isNavVisible ? "show" : ""}`}
                    to="/login"
                >
                    Login
                </NavLink>
            )}
        </nav>
    );
};

export default Navbar;
