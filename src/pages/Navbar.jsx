import React, { useState, useCallback } from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onImage116Click = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onHomeText1Click = useCallback(() => {
        navigate("/");
        setIsMenuOpen(false);
    }, [navigate]);

    const onParachuteClick = useCallback(() => {
        navigate("/product");
        setIsMenuOpen(false);
    }, [navigate]);

    const onInflatableClick = useCallback(() => {
        navigate("/");
        setIsMenuOpen(false);
    }, [navigate]);

    const onAboutUsText1Click = useCallback(() => {
        navigate("/about-us");
        setIsMenuOpen(false);
    }, [navigate]);

    const onContactUsText1Click = useCallback(() => {
        navigate("/contact-us");
        setIsMenuOpen(false);
    }, [navigate]);

    const toggleMenu = () => {
        console.log("Toggling menu:", !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <img
                    className="logo1"
                    loading="lazy"
                    alt="Logo"
                    src="/image-1161@2x.png"
                    onClick={onImage116Click}
                />
                <div className="navbar-menu">
                    <div className="navbar-item" onClick={onHomeText1Click}>Home</div>
                    <div className="navbar-item" onClick={onParachuteClick}>Parachute recovery system</div>
                    <div className="navbar-item" onClick={onInflatableClick}>Inflatable airbags system</div>
                    <div className="navbar-item" onClick={onAboutUsText1Click}>About us</div>
                    <div className="navbar-item" onClick={onContactUsText1Click}>Contact Us</div>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-item" onClick={onHomeText1Click}>Home</div>
                <div className="mobile-menu-item" onClick={onParachuteClick}>Parachute recovery system</div>
                <div className="mobile-menu-item" onClick={onInflatableClick}>Inflatable airbags system</div>
                <div className="mobile-menu-item" onClick={onAboutUsText1Click}>About us</div>
                <div className="mobile-menu-item" onClick={onContactUsText1Click}>Contact Us</div>
            </div>
        </div>
    );
};

export default Navbar;
