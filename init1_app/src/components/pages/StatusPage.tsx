import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import './StatusPage.css';

const SERVICES = [
  { name: 'api-gateway',  uptime: '22d 14h 03m', pid: 1842 },
  { name: 'postgres',     uptime: '22d 14h 03m', pid: 1103 },
  { name: 'redis',        uptime: '22d 14h 01m', pid: 1247 },
  { name: 'auth-service', uptime: '21d 09h 47m', pid: 2381 },
  { name: 'worker',       uptime: '18d 22h 15m', pid: 3042 },
  { name: 'scheduler',    uptime: '18d 22h 14m', pid: 3089 },
];

const INTERVAL = 450;

const StatusPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(0);
  const [backSelected, setBackSelected] = useState(false);

  useEffect(() => {
    if (visible >= SERVICES.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' || e.key === 'Escape') navigate('/');
      else if (e.key === 'ArrowDown') { e.preventDefault(); setBackSelected(true); }
      else if (e.key === 'ArrowUp')   { e.preventDefault(); setBackSelected(false); }
      else if (e.key === 'Enter' && backSelected) navigate('/');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, backSelected]);

  return (
    <div className="crt-screen">
      <div className="scanlines" />
      <div className="terminal-container">
        <span className="terminal-text">
          {'>'} init1/status
          <span className={backSelected ? 'static-cursor' : 'blinking-cursor'} aria-hidden="true" />
        </span>
        <div className="status-list">
          {SERVICES.slice(0, visible).map(svc => (
            <div key={svc.name} className="status-row">
              <span className="status-dot">●</span>
              <span className="status-name">{svc.name}</span>
              <span className="status-badge">[ running ]</span>
              <span className="status-meta">pid: {svc.pid}  uptime: {svc.uptime}</span>
            </div>
          ))}
        </div>
        <span
          className={`file-item${backSelected ? ' file-item--selected' : ''}`}
          onClick={() => navigate('/')}
          onMouseEnter={() => setBackSelected(true)}
          onMouseLeave={() => setBackSelected(false)}
        >
          cd ..
        </span>
      </div>
    </div>
  );
};

export default StatusPage;
