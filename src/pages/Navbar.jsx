import React, { useState, useCallback } from 'react';
import './Navbar.css';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation handler
    const handleNavigation = useCallback((path) => {
        navigate(path);
        setIsMenuOpen(false);
    }, [navigate]);

    // Toggle menu
    const toggleMenu = () => {
        console.log("Toggling menu:", !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to check if a path is active
    const isActive = (path) => location.pathname === path;

    return (
        <div className="navbar">
            <div className="navbar-container">
                <img
                    className="logo1"
                    loading="lazy"
                    alt="Logo"
                    src="/image-1161@2x.png"
                    onClick={() => handleNavigation("/")}
                />
                <div className="navbar-menu">
                    <div className={`navbar-item ${isActive("/") ? "active" : ""}`} onClick={() => handleNavigation("/")}>Home</div>
                    <div className={`navbar-item ${isActive("/product") ? "active" : ""}`} onClick={() => handleNavigation("/product")}>Parachute recovery system</div>
                    <div className={`navbar-item ${isActive("/inflatable") ? "active" : ""}`} onClick={() => handleNavigation("/")}>Inflatable airbags system</div>
                    <div className={`navbar-item ${isActive("/about-us") ? "active" : ""}`} onClick={() => handleNavigation("/about-us")}>About us</div>
                    <div className={`navbar-item ${isActive("/contact-us") ? "active" : ""}`} onClick={() => handleNavigation("/contact-us")}>Contact Us</div>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className={`mobile-menu-item ${isActive("/") ? "active" : ""}`} onClick={() => handleNavigation("/")}>Home</div>
                <div className={`mobile-menu-item ${isActive("/product") ? "active" : ""}`} onClick={() => handleNavigation("/product")}>Parachute recovery system</div>
                <div className={`mobile-menu-item ${isActive("/inflatable") ? "active" : ""}`} onClick={() => handleNavigation("/inflatable")}>Inflatable airbags system</div>
                <div className={`mobile-menu-item ${isActive("/about-us") ? "active" : ""}`} onClick={() => handleNavigation("/about-us")}>About us</div>
                <div className={`mobile-menu-item ${isActive("/contact-us") ? "active" : ""}`} onClick={() => handleNavigation("/contact-us")}>Contact Us</div>
            </div>
        </div>
    );
};

export default Navbar;
