import React from 'react';
import './frame-component.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const FrameComponent = () => {
  return (
    <div className="footermain">
      <hr className='hruper'/>
      <div className="footer-top">
        <div className="footer-section-1">
          <img
            className="logo-footer"
            loading="lazy"
            alt="Logo"
            src="/image-1161@2x.png"
          />
          <div className="foter-h2">
            <h2>UTTOREA</h2>
            <hr className='hrlogo'/>
            <p>Rescue & Safety Systems</p>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-phone">
          <a href="https://wa.me/917219286003" target="_blank" rel="noopener noreferrer">
            <p>+91 721 928 6003</p>
          </a>
          <a href="mailto:sales@uttorea.com">
            <p className="email-footer">sales@uttorea.com</p>
          </a>
        </div>

        <div className="footer-section-products">
          <h3>Product</h3>
          <p><Link smooth to="/product#asentm">Multirotor Recovery system</Link></p>
          <p><Link to="/product">Fixed wing Recovery system</Link></p>
        </div>
        <div className="footer-section-services">  
          <h3 className="footer-service">Services</h3>
          <p className="custom-footer"><Link to="/">Custom Drone Recovery system</Link></p>
        </div>
        <div className="footer-section-office">
          <h3>Office</h3>
          <p style={{ textAlign: 'start', width: '55%' }}>
            DJAC, SIIC building, IIT Kanpur 208016
          </p>

        </div>
      </div>

      <div className="footer-bottom">
        <hr className='hrbottom' />
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              className="facebook-icon2"
              loading="lazy"
              alt="Tw"
              src="/facebook.svg"
            />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              className="linkedin-icon2"
              loading="lazy"
              alt="LinkedIn"
              src="/linkedin.svg"
            />
          </a>
          <p>&copy; 2024 UTTOREA. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
