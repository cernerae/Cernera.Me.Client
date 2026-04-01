import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css';

const LandingPage = () => (
  <div className="page">

    {/* ── Hero (larger on landing) ── */}
    <div className="hero hero--large">
      <div className="hero-scanlines" />
      <div className="hero-content">
        <span className="hero-eyebrow">// software engineering firm</span>
        <h1 className="hero-title">init1</h1>
        <p className="hero-sub">we build things that run in production.</p>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
    </div>

    {/* ── Section 1: what we do ── */}
    <section className="section">
      <div className="section-text">
        <h2 className="section-heading">what we do</h2>
        <p className="section-body">
          init1 llc partners with enterprise clients to design,
          build, and deploy production-grade systems — from web
          applications to applied ai solutions.
          <br /><br />
          we are a small team. we work on things that matter.
        </p>
        <Link to="/services" className="section-link">view services</Link>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">services.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">web development</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">applied ai solutions</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">system architecture</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">production deployment</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── Section 2: our work ── */}
    <section className="section section--reverse">
      <div className="section-text">
        <h2 className="section-heading">our work</h2>
        <p className="section-body">
          from interactive web demos to full-stack systems,
          we ship working software. take a look at what
          we've built.
        </p>
        <Link to="/gallery" className="section-link">view gallery</Link>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">gallery.js</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">--</span>
            <span className="term-line-bright">htdemo.cernera.me</span>
            <span className="term-line-green" style={{ fontSize: '0.74rem' }}>[OK]</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── Section 3: get in touch ── */}
    <section className="section">
      <div className="section-text">
        <h2 className="section-heading">say hello</h2>
        <p className="section-body">
          ready to build something?<br />
          reach out and let's talk.
        </p>
        <Link to="/contact" className="section-link">get in touch</Link>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">contact.py</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">&gt;</span>
            <span>initializing contact protocol...</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">&gt;</span>
            <span>resolving linkedin.com...</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">&gt;</span>
            <span className="term-line-green">handshake complete.</span>
          </div>
        </div>
      </div>
    </section>

  </div>
);

export default LandingPage;
