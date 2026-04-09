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
        <h2 className="section-heading">experience that holds up.</h2>
        <p className="section-body">
          we're a small team of engineers. between us, we've worked inside
          large organizations and fast-moving startups, led engineering
          efforts, inherited codebases in rough shape, and shipped
          production systems that handle real load with real
          consequences.<br /><br />
          we've seen what happens when architecture decisions get rushed,
          when security gets treated as an afterthought, and when a
          handoff to a junior team quietly breaks a project after the
          pitch. we've been the ones cleaning that up, and we build
          differently because of it.
        </p>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">log.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">git log --oneline</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-dim">a3f2c1d  payment pipeline · 40k tx/day</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">b8e4f92  auth rewrite · zero downtime</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">c12d8a3  llm pipeline · prod saas</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">d94f103  infra hardening · 12 vulns closed</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">e7b2c9f  microservices rebuild · shipped</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-green">// and counting.</span>
          </div>
        </div>
      </div>
    </section>

    {/* ── 02 ── */}
    <section className="section">
      <div className="section-text">
        <span className="about-num">02</span>
        <h2 className="section-heading">small, direct, and accountable.</h2>
        <p className="section-body">
          we keep the team small by design. every project is handled by
          our founding engineers, from scoping through delivery, with no
          contractors or handoffs involved.<br /><br />
          you talk to the people writing your code. we scope honestly,
          communicate early when something changes, and treat your
          deadlines like our own. there are no account managers between
          you and the work, and no internal process designed to prioritize
          the agency over the client.
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
        <h2 className="section-heading">we work on hard problems.</h2>
        <p className="section-body">
          the projects we find most interesting are the ones that look
          difficult. systems under real constraints, integrations with
          real complexity, AI that has to work in production rather than
          just in a notebook.<br /><br />
          we don't look for easy contracts to run the clock on. we look
          for work worth doing, with clients who give a damn about the
          outcome.
        </p>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">interests.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">cat interesting-work.txt</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-dim">systems under real constraints.</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">AI that ships, not just demos.</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">codebases worth saving.</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">problems without obvious answers.</span>
          </div>
          <div className="term-line">&nbsp;</div>
          <div className="term-line">
            <span className="term-line-green">// the harder the better.</span>
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
            <span className="term-line-dim">AI:         architecture · LLM · pipelines</span>
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
