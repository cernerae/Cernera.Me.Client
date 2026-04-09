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
        <p className="hero-sub">let's build something.</p>
        <div className="hero-actions">
          <Link to="/contact" className="hero-btn hero-btn--accent">
            get in touch
            <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
          </Link>
          <Link to="/services" className="hero-btn">
            our services
            <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
          </Link>
        </div>
        <p className="hero-stack">react · node · java · python · docker · postgres · AWS</p>
      </div>
    </div>

    {/* ── Section 1: what we do ── */}
    <section className="section">
      <div className="section-text">
        <h2 className="section-heading">what we do</h2>
        <p className="section-body">
          the work we find most interesting is the work that looks hard.<br /><br />
          we're an independent team of engineers taking on contracts and consulting
          work at any scale, from local businesses that need something built right,
          to enterprise teams with real problems. full stack, full picture:
          architecture, APIs, applied AI, infrastructure, security, and production
          deployment. we own the whole thing.
        </p>
        <Link to="/services" className="section-link">
          view services
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <HeroTerminal />
      </div>
    </section>

    {/* ── Why init1: three-tile strip ── */}
    <section className="landing-why">
      <div className="landing-why-grid">
        <div className="landing-why-tile">
          <span className="landing-why-num">01</span>
          <h3 className="landing-why-heading">built in-house.</h3>
          <p className="landing-why-body">
            every project is handled directly by our founding engineers, with no
            contractors or outsourcing involved.
          </p>
        </div>
        <div className="landing-why-tile">
          <span className="landing-why-num">02</span>
          <h3 className="landing-why-heading">direct access.</h3>
          <p className="landing-why-body">
            you communicate directly with the engineers building your product.
            there are no account managers or coordinators between you and the work.
          </p>
        </div>
        <div className="landing-why-tile">
          <span className="landing-why-num">03</span>
          <h3 className="landing-why-heading">we ship.</h3>
          <p className="landing-why-body">
            we scope it, build it, and ship it. timelines are honest, and
            the goal is working software in production.
          </p>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="landing-cta">
      <p className="landing-cta-heading">let's build.</p>
      <Link to="/contact" className="hero-btn">
        get in touch
        <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
      </Link>
    </section>

  </div>
);

export default LandingPage;
