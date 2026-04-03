import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css';
import './LandingPage.css';
import HeroTerminal from '../HeroTerminal';

const LandingPage = () => (
  <div className="page">

    {/* ── Hero ── */}
    <div className="hero hero--large">
      <div className="hero-scanlines" />
      <div className="hero-content">
        <span className="hero-eyebrow">// software engineering firm</span>
        <h1 className="hero-title hero-title--glitch" data-text="init1">init1</h1>
        <p className="hero-sub">Engineered to perform. Designed to stand out.</p>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
      <div className="hero-right">
        <HeroTerminal />
        <div className="hero-actions">
          <Link to="/services" className="hero-btn">Our services <i className="fa-solid fa-chevron-right" /></Link>
          <Link to="/contact" className="hero-btn">Get in touch <i className="fa-solid fa-chevron-right" /></Link>
        </div>
      </div>
    </div>

    {/* ── Section 1: what we do ── */}
    <section className="section">
      <div className="section-text">
        <h2 className="section-heading">what we do</h2>
        <p className="section-body">
          we work with clients at any scale, from local businesses that
          need a website that actually works, to enterprise teams with
          complex systems to build.<br /><br />
          the engagement looks different. the standard doesn't.
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
            <span className="term-line-bright">ls services/</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">web-development</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">applied-ai-solutions</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">system-architecture</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">api-development</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">cloud-devops</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">security-hardening</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── Why init1: three-tile strip ── */}
    <section className="landing-why">
      <div className="landing-why-grid">
        <div className="landing-why-tile">
          <span className="landing-why-num">01</span>
          <h3 className="landing-why-heading">built in-house.</h3>
          <p className="landing-why-body">
            no contractors. no outsourcing. every line written by our founding
            engineers.
          </p>
        </div>
        <div className="landing-why-tile">
          <span className="landing-why-num">02</span>
          <h3 className="landing-why-heading">direct access.</h3>
          <p className="landing-why-body">
            you talk to the engineers building your product, not account
            managers, not coordinators. no proxies, no queues.
          </p>
        </div>
        <div className="landing-why-tile">
          <span className="landing-why-num">03</span>
          <h3 className="landing-why-heading">honest delivery.</h3>
          <p className="landing-why-body">
            we scope it, we build it, we ship it. no inflated timelines,
            no "almost there." working software in production.
          </p>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="landing-cta">
      <p className="landing-cta-heading">ready to build something?</p>
      <p className="landing-cta-sub">
        we're currently taking on new clients — local businesses and enterprise teams alike.
      </p>
      <Link to="/contact" className="hero-btn">
        get in touch <i className="fa-solid fa-chevron-right" />
      </Link>
    </section>

  </div>
);

export default LandingPage;
