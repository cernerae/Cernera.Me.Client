import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const FILES = [
  { name: 'about.txt',  path: '/about' },
  { name: 'gallery.js', path: '/gallery' },
  { name: 'status.sh',  path: '/status' },
  { name: 'ping.sh',    path: '/ping' },
  { name: 'logs.txt',   path: '/logs' },
  { name: 'contact.py', path: '/contact' },
];

const COLS = 2;

const LandingPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        setSelected(s => s === null ? 0 : (s + 1) % FILES.length);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        setSelected(s => s === null ? FILES.length - 1 : (s - 1 + FILES.length) % FILES.length);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelected(s => {
          if (s === null) return 0;
          const next = s + COLS;
          return next < FILES.length ? next : s;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelected(s => {
          if (s === null) return 0;
          const prev = s - COLS;
          return prev >= 0 ? prev : null;
        });
        break;
      case 'Tab':
        e.preventDefault();
        if (e.shiftKey) {
          setSelected(s => s === null ? FILES.length - 1 : (s - 1 + FILES.length) % FILES.length);
        } else {
          setSelected(s => s === null ? 0 : (s + 1) % FILES.length);
        }
        break;
      case 'Enter':
        if (selected !== null) navigate(FILES[selected].path);
        break;
    }
  }, [selected, navigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="crt-screen">
      <div className="scanlines" />
      <div className="terminal-container">
        <span className="terminal-text">
          {'>'} init1
          <span className={selected === null ? 'blinking-cursor' : 'static-cursor'} aria-hidden="true" />
        </span>
        <div className="file-grid">
          {FILES.map((file, i) => (
            <div
              key={file.name}
              className={`file-item${i === selected ? ' file-item--selected' : ''}`}
              onClick={() => navigate(file.path)}
              onMouseEnter={() => setSelected(i)}
            >
              {file.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;