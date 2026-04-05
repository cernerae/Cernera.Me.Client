import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css';
import './AboutPage.css';

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

    {/* ── 01 ── */}
    <section className="section">
      <div className="section-text">
        <span className="about-num">01</span>
        <h2 className="section-heading">we build it ourselves.</h2>
        <p className="section-body">
          no contractors. no outsourcing. no handoffs to a junior team
          after the pitch.<br /><br />
          every project is handled directly by our founding engineers,
          people with years of experience building production systems at
          enterprise scale. you always know exactly who is working on
          your code.
        </p>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">team.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">whoami</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">init1 — founding engineers</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">cat no-outsourcing.txt</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">every line written in-house.</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">no contractors. no handoffs.</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">you know who's on your code.</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── 02 ── */}
    <section className="section">
      <div className="section-text">
        <span className="about-num">02</span>
        <h2 className="section-heading">direct access, always.</h2>
        <p className="section-body">
          you talk to the engineers building your product. not account
          managers, not coordinators, not a support queue.<br /><br />
          we communicate directly, move without unnecessary process, and
          treat your deadlines like our own. if something is off, you
          hear it from us first.
        </p>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">ping.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">ping client --direct</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">no proxy detected.</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">no account manager in path.</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-dim">route: engineer → client</span>
          </div>
          <div className="term-line">
            <span className="term-line-green">connection: direct.</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── 03 ── */}
    <section className="section">
      <div className="section-text">
        <span className="about-num">03</span>
        <h2 className="section-heading">we don't over-promise.</h2>
        <p className="section-body">
          we scope honestly. we tell you what's realistic. we won't sell
          you a roadmap we can't deliver or pad a project to run the
          clock.<br /><br />
          small team, serious work. that's the arrangement.
        </p>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">scope.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">cat promise.txt</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">honest scoping.</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">realistic timelines.</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">no inflated estimates.</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-green">// we ship what we scope.</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── 04 ── */}
    <section className="section">
      <div className="section-text">
        <span className="about-num">04</span>
        <h2 className="section-heading">what we work in.</h2>
        <p className="section-body">
          we don't lock ourselves into a single stack. we use what's right
          for the job, and we've worked in enough environments to know the
          difference.
        </p>
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
          <div className="term-line">
            <span className="term-line-dim">frontend:   react</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">languages:  java · python · node</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">infra:      docker · linux</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">ai:         architecture · llm · pipelines</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">security:   hardening · auth · audits</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-green">// + whatever the job requires.</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="about-cta">
      <p className="about-cta-heading">we're taking on new clients.</p>
      <Link to="/contact" className="hero-btn">
        get in touch
        <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
      </Link>
    </section>

  </div>
);

export default AboutPage;
