import React, { useState } from 'react';
import '../Layout.css';
import './ContactPage.css';

const LINKEDIN_URL = 'https://www.linkedin.com/company/init1-llc';
const EMAIL = 'devs@init1.biz';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
  <div className="page">

    <div className="hero hero--small">
      <div className="hero-scanlines" />
      <div className="hero-content">
        <span className="hero-eyebrow">// init1 / contact</span>
        <h1 className="hero-title">contact</h1>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
    </div>

    <section className="section contact-section">

      {/* ── Left: intro + status terminal ── */}
      <div className="section-text">
        <h2 className="section-heading">ready to build something incredible?</h2>
        <p className="section-body">
          got a project to scope, a system to build, or an engineering
          problem that needs a real solution? we work with clients at
          any scale.<br /><br />
          reach out via email or linkedin. we respond fast.
        </p>

        <div className="term-panel contact-status">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">status.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">init1 --status</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="contact-status-key">accepting clients</span>
            <span className="term-line-green">yes</span>
          </div>
          <div className="term-line">
            <span className="contact-status-key">response time</span>
            <span className="term-line-dim">&lt; 24h</span>
          </div>
          <div className="term-line">
            <span className="contact-status-key">location</span>
            <span className="term-line-dim">anywhere</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-green">ready.</span>
          </div>
        </div>
      </div>

      {/* ── Right: contact cards ── */}
      <div className="section-visual contact-visual">
        <div className="contact-cards">

          <div className="contact-card">
            <i className="fa-brands fa-linkedin contact-card-icon" aria-hidden="true" />
            <span className="contact-card-label">linkedin</span>
            <div className="contact-card-value">linkedin.com/company/init1-llc</div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-btn"
            >
              view company page <i className="fa-solid fa-chevron-right" />
            </a>
          </div>

          <div className="contact-card">
            <i className="fa-solid fa-envelope contact-card-icon" aria-hidden="true" />
            <span className="contact-card-label">email</span>
            <div className="contact-card-value-wrap">
              <span className="contact-card-value">{EMAIL}</span>
              <button
                className={`contact-copy-btn${copied ? ' contact-copy-btn--copied' : ''}`}
                onClick={handleCopy}
                title="Copy email"
              >
                <i className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'} />
              </button>
            </div>
            <a href={`mailto:${EMAIL}`} className="contact-card-btn">
              send email <i className="fa-solid fa-chevron-right" />
            </a>
          </div>

        </div>
      </div>

    </section>

  </div>
  );
};

export default ContactPage;
