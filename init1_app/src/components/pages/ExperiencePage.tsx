import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css';
import './ExperiencePage.css';

const ExperiencePage = () => (
  <div className="page">

    <div className="hero hero--small">
      <div className="hero-scanlines" />
      <div className="hero-content">
        <span className="hero-eyebrow">// init1 / experience</span>
        <h1 className="hero-title">experience</h1>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
    </div>

    {/* ── 01: Government security ── */}
    <section className="section">
      <div className="section-text">
        <span className="exp-num">01</span>
        <h2 className="section-heading">security at the highest clearance.</h2>
        <p className="section-body">
          members of our team have designed and shipped security systems for
          agencies within the US government. real infrastructure, real threat
          models, and zero margin for error.<br /><br />
          this isn't theoretical. it was built, deployed, and it runs.
        </p>
        <Link to="/contact" className="section-link">
          work with us
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <div className="exp-visual-wrap">
          <i className="fa-solid fa-landmark-dome exp-pictogram" aria-hidden="true" />
        </div>
      </div>
    </section>

    {/* ── 02: Enterprise AI ── */}
    <section className="section section--reverse">
      <div className="section-text">
        <span className="exp-num">02</span>
        <h2 className="section-heading">AI at enterprise scale.</h2>
        <p className="section-body">
          we've architected and delivered AI systems inside organizations with
          millions of users. production pipelines
          handling real data, real load, and real consequences.<br /><br />
          the difference between a working model and a working product is everything.
        </p>
        <Link to="/contact" className="section-link">
          work with us
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <div className="exp-visual-wrap">
          <i className="fa-solid fa-hexagon-nodes exp-pictogram" aria-hidden="true" />
        </div>
      </div>
    </section>

    {/* ── 03: Engineering leadership ── */}
    <section className="section">
      <div className="section-text">
        <span className="exp-num">03</span>
        <h2 className="section-heading">led the teams that built it.</h2>
        <p className="section-body">
          our engineers have owned technical direction at the team level, setting
          architecture standards, conducting reviews, managing delivery, and
          mentoring the engineers doing the work.<br /><br />
          we've been in the seat. we know what good engineering leadership looks like.
        </p>
        <Link to="/contact" className="section-link">
          work with us
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <div className="exp-visual-wrap">
          <i className="fa-solid fa-users exp-pictogram" aria-hidden="true" />
        </div>
      </div>
    </section>

    {/* ── 04: High-value client delivery ── */}
    <section className="section section--reverse">
      <div className="section-text">
        <span className="exp-num">04</span>
        <h2 className="section-heading">millions on the line.</h2>
        <p className="section-body">
          our team has represented employers directly in front of enterprise
          clients on deals exceeding $10M, presenting technical architecture,
          owning scope conversations, and seeing contracts through to delivery.<br /><br />
          no intermediaries. the engineers in the room are the engineers who build it.
        </p>
        <Link to="/contact" className="section-link">
          work with us
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <div className="exp-visual-wrap">
          <i className="fa-solid fa-handshake exp-pictogram" aria-hidden="true" />
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="exp-cta">
      <p className="exp-cta-heading">we're taking on new clients.</p>
      <p className="exp-cta-sub">we've been here before. whenever you're ready.</p>
      <Link to="/contact" className="hero-btn">
        get in touch
        <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
      </Link>
    </section>

  </div>
);

export default ExperiencePage;
