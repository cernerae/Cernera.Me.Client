import React, { useMemo } from 'react';
import '../Layout.css';
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
  const tz     = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const screen = `${window.screen.width}x${window.screen.height}`;
  const dpr    = window.devicePixelRatio;
  const depth  = window.screen.colorDepth;
  const cores  = nav.hardwareConcurrency ?? 'unknown';
  const memory = nav.deviceMemory ? `${nav.deviceMemory}gb` : 'unknown';
  const lang   = nav.language;
  const online = nav.onLine ? 'true' : 'false';
  const cookies = nav.cookieEnabled ? 'enabled' : 'disabled';
  const touch   = nav.maxTouchPoints > 0 ? `true (${nav.maxTouchPoints} points)` : 'false';
  const referrer = document.referrer || 'none';
  const connection = nav.connection?.effectiveType ?? 'unknown';
  const downlink   = nav.connection?.downlink ? `${nav.connection.downlink} mbps` : 'unknown';
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
  const log = useMemo(() => buildLog(), []);

  return (
    <div className="page">

      <div className="hero hero--small">
        <div className="hero-scanlines" />
        <div className="hero-content">
          <span className="hero-eyebrow">// init1 / logs</span>
          <h1 className="hero-title">logs</h1>
          <span className="hero-cursor" aria-hidden="true" />
        </div>
      </div>

      <section className="section">
        <div className="section-text">
          <h2 className="section-heading">session log</h2>
          <p className="section-body">
            client environment captured at session start.
          </p>
        </div>
        <div className="section-visual" style={{ justifyContent: 'flex-start' }}>
          <div className="term-panel" style={{ maxWidth: '640px' }}>
            <div className="term-panel-bar">
              <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
              <span className="term-panel-title">logs.txt</span>
            </div>
            <div className="log-entries">
              {log.map((entry, i) => (
                <div key={i} className="log-entry">
                  <span className="log-ts">{entry.ts}</span>
                  <span className="log-text">{entry.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LogsPage;
