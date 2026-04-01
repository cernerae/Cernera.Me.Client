import React from 'react';
import '../Layout.css';

const AboutPage = () => (
  <div className="page">

    <div className="hero hero--small">
      <div className="hero-scanlines" />
      <div className="hero-content">
        <span className="hero-eyebrow">// init1 / about</span>
        <h1 className="hero-title">about</h1>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
    </div>

    <section className="section">
      <div className="section-text">
        <h2 className="section-heading">the firm</h2>
        <p className="section-body">
          init1 llc is a software engineering firm.<br />
          we partner with enterprise clients to design, build,<br />
          and deploy production-grade systems — from web development<br />
          to applied ai solutions.<br />
          <br />
          we are a small team. we work on things that matter.
        </p>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">about.txt</span>
          </div>
          <div className="term-line term-line-bright">enterprise clients.</div>
          <div className="term-line term-line-bright">production-grade systems.</div>
          <div className="term-line term-line-bright">web + applied ai.</div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line term-line-bright">small team.</div>
          <div className="term-line term-line-bright">things that matter.</div>
        </div>
      </div>
    </section>

  </div>
);

export default AboutPage;
