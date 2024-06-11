// src/components/LoadingPage.js
import React from 'react';
import './LoadingPage.css';
import logo from '../assert/logo.png';  // Ensure the path is correct

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
}

export default LoadingPage;
