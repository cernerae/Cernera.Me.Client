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
        <p className="hero-sub">Built fast. Built right. Built by us.</p>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
      <div className="hero-right">
        <HeroTerminal />
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
      </div>
    </div>

    {/* ── Section 1: what we do ── */}
    <section className="section">
      <div className="section-text">
        <h2 className="section-heading">what we do</h2>
        <p className="section-body">
          we're an independent team of engineers. we take on contracts and
          consulting work for businesses at any scale, from local companies
          that need something built right, to enterprise teams with problems
          worth solving.<br /><br />
          our experience runs the full stack. from system architecture and
          infrastructure design to APIs, applied AI, security, and production
          deployment. we don't specialize in one layer and hand off the rest.
          we own the full picture, and that depth shows in the decisions we
          make at every step.<br /><br />
          we've worked inside large organizations, led engineering teams, and
          shipped systems that handle real load with real consequences. we bring
          that same standard to every engagement, regardless of size.<br /><br />
          the work we find most interesting is the work that looks hard.
        </p>
        <Link to="/services" className="section-link">
          view services
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
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
          <h3 className="landing-why-heading">we ship.</h3>
          <p className="landing-why-body">
            we scope it, we build it, we ship it. no inflated timelines,
            no "almost there." working software in production.
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
