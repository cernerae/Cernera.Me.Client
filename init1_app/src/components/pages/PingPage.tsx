import React, { useState, useEffect } from 'react';
import '../Layout.css';
import './PingPage.css';

const HOST = 'init1.biz';
const IP   = '143.198.62.11';
const TTL  = 54;
const TIMES = [12.4, 11.8, 13.1, 12.7, 14.2, 11.5, 13.8, 12.1];
const PING_INTERVAL = 900;

const avg  = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
const min  = (arr: number[]) => Math.min(...arr);
const max  = (arr: number[]) => Math.max(...arr);
const mdev = (arr: number[]) => {
  const m = avg(arr);
  return Math.sqrt(arr.reduce((a, b) => a + (b - m) ** 2, 0) / arr.length);
};

const PingPage = () => {
  const totalSteps = 1 + TIMES.length + 3;
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= totalSteps) return;
    const delay = step === 0 ? 300
      : step <= TIMES.length ? PING_INTERVAL
      : 400;
    const t = setTimeout(() => setStep(s => s + 1), delay);
    return () => clearTimeout(t);
  }, [step, totalSteps]);

  const visiblePings   = TIMES.slice(0, Math.max(0, step - 1));
  const showStatsHeader = step > 1 + TIMES.length;
  const showStatsLine1  = step > 2 + TIMES.length;
  const showStatsLine2  = step > 3 + TIMES.length;

  return (
    <div className="page">

      <div className="hero hero--small">
        <div className="hero-scanlines" />
        <div className="hero-content">
          <span className="hero-eyebrow">// init1 / ping</span>
          <h1 className="hero-title">ping</h1>
          <span className="hero-cursor" aria-hidden="true" />
        </div>
      </div>

      <section className="section">
        <div className="section-text">
          <h2 className="section-heading">network status</h2>
          <p className="section-body">
            connectivity check for {HOST} ({IP}).
            <br />
            transmitting {TIMES.length} icmp packets.
          </p>
        </div>
        <div className="section-visual" style={{ justifyContent: 'flex-start' }}>
          <div className="term-panel" style={{ maxWidth: '560px' }}>
            <div className="term-panel-bar">
              <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
              <span className="term-panel-title">ping.sh</span>
            </div>
            <div className="ping-output">
              {step >= 1 && (
                <div className="ping-line ping-header">
                  PING {HOST} ({IP}): 56 data bytes
                </div>
              )}
              {visiblePings.map((ms, i) => (
                <div key={i} className="ping-line">
                  64 bytes from {IP}: icmp_seq={i} ttl={TTL} time={ms} ms
                </div>
              ))}
              {showStatsHeader && (
                <div className="ping-line ping-divider">
                  --- {HOST} ping statistics ---
                </div>
              )}
              {showStatsLine1 && (
                <div className="ping-line">
                  {TIMES.length} packets transmitted, {TIMES.length} received,{' '}
                  0% packet loss, time {(TIMES.length - 1) * PING_INTERVAL}ms
                </div>
              )}
              {showStatsLine2 && (
                <div className="ping-line ping-stats">
                  rtt min/avg/max/mdev = {min(TIMES).toFixed(1)}/
                  {avg(TIMES).toFixed(1)}/{max(TIMES).toFixed(1)}/
                  {mdev(TIMES).toFixed(1)} ms
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PingPage;
