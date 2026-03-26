import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import './AboutPage.css';

const PlaceholderPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' || e.key === 'Escape') {
        navigate('/');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected(true);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected(false);
      } else if (e.key === 'Enter' && selected) {
        navigate('/');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, selected]);

  return (
    <div className="crt-screen">
      <div className="scanlines" />
      <div className="terminal-container">
        <span className="terminal-text">
          {'>'} init1/about
          <span className={selected ? 'static-cursor' : 'blinking-cursor'} aria-hidden="true" />
        </span>
        <p className="about-text">
          init1 llc is a software engineering firm.<br />
          we partner with enterprise clients to design, build,<br />
          and deploy production-grade systems — from web development<br />
          to applied ai solutions.<br />
          we are a small team. we work on things that matter.
        </p>
        <span
          className={`file-item${selected ? ' file-item--selected' : ''}`}
          onClick={() => navigate('/')}
          onMouseEnter={() => setSelected(true)}
          onMouseLeave={() => setSelected(false)}
        >
          cd ..
        </span>
      </div>
    </div>
  );
};

export default PlaceholderPage;
