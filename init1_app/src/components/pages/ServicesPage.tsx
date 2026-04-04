import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css';
import './ServicesPage.css';

const ServicesPage = () => (
  <div className="page">

    <div className="hero hero--small">
      <div className="hero-scanlines" />
      <div className="hero-content">
        <span className="hero-eyebrow">// init1 / services</span>
        <h1 className="hero-title">services</h1>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
    </div>

    {/* ── 01: Full-Stack Web Development ── */}
    <section className="section">
      <div className="section-text">
        <span className="services-num">01</span>
        <h2 className="section-heading">full-stack web development.</h2>
        <p className="section-body">
          from local business sites to enterprise-grade platforms, we build
          production-ready applications end to end. react frontends, java and
          node backends, rest apis, database design, and deployment.<br /><br />
          no hand-offs. no outsourcing. the same engineers who scope it build
          it, ship it, and stand behind it.
        </p>
        <Link to="/contact" className="section-link">
          discuss your project
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">stack.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">cat stack.txt</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-dim">frontend    react · typescript</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">backend     java · node · python</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">databases   postgres · mysql · redis</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">apis        rest · graphql</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">infra       docker · linux · ci/cd</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-green">// built for production.</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── 02: Applied AI Solutions ── */}
    <section className="section section--reverse">
      <div className="section-text">
        <span className="services-num">02</span>
        <h2 className="section-heading">applied ai solutions.</h2>
        <p className="section-body">
          we design and build ai systems that work in production, not
          proof-of-concepts that die in staging. llm integration, retrieval
          pipelines, fine-tuning, and ai-powered features embedded directly
          into your existing products.<br /><br />
          we architect for reliability, latency, and cost because a model
          that works in a notebook isn't a product.
        </p>
        <Link to="/contact" className="section-link">
          discuss your project
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">pipeline.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">init1 --pipeline deploy</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-dim">[1/4] ingesting data sources</span>
            <span className="term-line-green">ok</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">[2/4] building retrieval index</span>
            <span className="term-line-green">ok</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">[3/4] configuring llm pipeline</span>
            <span className="term-line-green">ok</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">[4/4] deploying to production</span>
            <span className="term-line-green">ok</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-green">// pipeline live.</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── 03: Security & Hardening ── */}
    <section className="section">
      <div className="section-text">
        <span className="services-num">03</span>
        <h2 className="section-heading">security & hardening.</h2>
        <p className="section-body">
          we audit codebases, harden infrastructure, and design auth systems
          that hold up under real scrutiny. dependency audits, secrets
          management, role-based access control, and penetration testing.<br /><br />
          we find the gaps before someone else does.
        </p>
        <Link to="/contact" className="section-link">
          discuss your project
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">audit.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">init1 audit --full</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-dim">[auth]       </span>
            <span className="term-line-green">pass</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">[deps]       </span>
            <span className="term-line-green">pass</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">[secrets]    </span>
            <span className="term-line-green">pass</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">[endpoints]  </span>
            <span className="term-line-green">pass</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">[headers]    </span>
            <span className="term-line-green">pass</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-green">// hardened.</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="services-cta">
      <p className="services-cta-heading">not sure which fits?</p>
      <p className="services-cta-sub">
        most projects touch more than one area. tell us what you're building
        and we'll figure out the right scope together.
      </p>
      <Link to="/contact" className="hero-btn">
        Get in touch
        <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
      </Link>
    </section>

  </div>
);

export default ServicesPage;
