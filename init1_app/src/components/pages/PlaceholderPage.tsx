import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LandingPage.css';

const PlaceholderPage = () => {
  const { pathname } = useLocation();
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
          {'>'} init1{pathname}
          <span className={selected ? 'static-cursor' : 'blinking-cursor'} aria-hidden="true" />
        </span>
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
