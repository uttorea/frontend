// src/components/LoadingPage.js
import React from 'react';
import './LoadingPage.css';
import loadingVideo from '../assert/l1.mp4';  // Ensure the path is correct

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <video autoPlay loop muted className="loading-video">
        <source src={loadingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default LoadingPage;