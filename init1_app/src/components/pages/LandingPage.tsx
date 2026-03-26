import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="crt-screen">
      <div className="scanlines" />
      <span className="terminal-text">
        {'>'} init1
        <span className="blinking-cursor" aria-hidden="true" />
      </span>
    </div>
  );
};

export default LandingPage;
