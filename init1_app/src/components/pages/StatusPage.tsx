import React, { useState, useEffect } from 'react';
import '../Layout.css';
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
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= SERVICES.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="page">

      <div className="hero hero--small">
        <div className="hero-scanlines" />
        <div className="hero-content">
          <span className="hero-eyebrow">// init1 / status</span>
          <h1 className="hero-title">status</h1>
          <span className="hero-cursor" aria-hidden="true" />
        </div>
      </div>

      <section className="section">
        <div className="section-text">
          <h2 className="section-heading">running services</h2>
          <p className="section-body">
            all systems operational. services are monitored
            continuously for uptime and performance.
          </p>
        </div>
        <div className="section-visual" style={{ justifyContent: 'flex-start' }}>
          <div className="term-panel" style={{ maxWidth: '520px' }}>
            <div className="term-panel-bar">
              <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
              <span className="term-panel-title">status.sh</span>
            </div>
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
          </div>
        </div>
      </section>

    </div>
  );
};

export default StatusPage;
