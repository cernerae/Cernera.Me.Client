import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import './GalleryPage.css';

const ITEMS = [
  { label: 'htdemo.cernera.me', url: 'https://htdemo.cernera.me/' },
];

const GalleryPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' || e.key === 'Escape') {
        navigate('/');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected(s => s === null ? 0 : Math.min(s + 1, ITEMS.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected(s => {
          if (s === null || s === 0) return null;
          return s - 1;
        });
      } else if (e.key === 'Enter') {
        if (selected === ITEMS.length) navigate('/');
        else if (selected !== null) window.open(ITEMS[selected].url, '_blank');
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
          {'>'} init1/gallery
          <span className={selected !== null ? 'static-cursor' : 'blinking-cursor'} aria-hidden="true" />
        </span>
        <div className="gallery-list">
          {ITEMS.map((item, i) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`file-item gallery-item${i === selected ? ' file-item--selected' : ''}`}
              onMouseEnter={() => setSelected(i)}
              onMouseLeave={() => setSelected(null)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <span
          className={`file-item${selected === ITEMS.length ? ' file-item--selected' : ''}`}
          onClick={() => navigate('/')}
          onMouseEnter={() => setSelected(ITEMS.length)}
          onMouseLeave={() => setSelected(null)}
          style={{ cursor: 'pointer' }}
        >
          cd ..
        </span>
      </div>
    </div>
  );
};

export default GalleryPage;
