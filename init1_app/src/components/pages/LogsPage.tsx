import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import './LogsPage.css';

const pad = (n: number) => String(n).padStart(2, '0');

const timestamp = (offsetMs = 0) => {
  const d = new Date(Date.now() - offsetMs);
  return `[${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}]`;
};

const nav = navigator as Navigator & {
  deviceMemory?: number;
  connection?: { effectiveType?: string; downlink?: number };
};

const buildLog = () => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const screen = `${window.screen.width}x${window.screen.height}`;
  const dpr = window.devicePixelRatio;
  const depth = window.screen.colorDepth;
  const cores = nav.hardwareConcurrency ?? 'unknown';
  const memory = nav.deviceMemory ? `${nav.deviceMemory}gb` : 'unknown';
  const lang = nav.language;
  const online = nav.onLine ? 'true' : 'false';
  const cookies = nav.cookieEnabled ? 'enabled' : 'disabled';
  const touch = nav.maxTouchPoints > 0 ? `true (${nav.maxTouchPoints} points)` : 'false';
  const referrer = document.referrer || 'none';
  const connection = nav.connection?.effectiveType ?? 'unknown';
  const downlink = nav.connection?.downlink ? `${nav.connection.downlink} mbps` : 'unknown';
  const ua = nav.userAgent;

  return [
    { ts: timestamp(1800), text: 'session initiated' },
    { ts: timestamp(1750), text: `user_agent: ${ua}` },
    { ts: timestamp(1700), text: `timezone: ${tz}` },
    { ts: timestamp(1650), text: `language: ${lang}` },
    { ts: timestamp(1600), text: `screen: ${screen} @ ${dpr}x  color_depth: ${depth}bit` },
    { ts: timestamp(1550), text: `cpu_cores: ${cores}  memory: ${memory}` },
    { ts: timestamp(1500), text: `network: ${connection}  downlink: ${downlink}` },
    { ts: timestamp(1450), text: `online: ${online}  cookies: ${cookies}  touch: ${touch}` },
    { ts: timestamp(1400), text: `referrer: ${referrer}` },
    { ts: timestamp(0),    text: 'log ready.' },
  ];
};

const LogsPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const log = useMemo(() => buildLog(), []);

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
          {'>'} init1/logs
          <span className={selected ? 'static-cursor' : 'blinking-cursor'} aria-hidden="true" />
        </span>
        <div className="log-entries">
          {log.map((entry, i) => (
            <div key={i} className="log-entry">
              <span className="log-ts">{entry.ts}</span>
              <span className="log-text">{entry.text}</span>
            </div>
          ))}
        </div>
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

export default LogsPage;
