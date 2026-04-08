import React from 'react';
import { Link } from 'react-router-dom';
import '../Layout.css';
import './ExperiencePage.css';
import SecurityTerminal from '../SecurityTerminal';

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
        <SecurityTerminal />
      </div>
    </section>

    {/* ── 02: Enterprise AI ── */}
    <section className="section section--reverse">
      <div className="section-text">
        <span className="exp-num">02</span>
        <h2 className="section-heading">AI at enterprise scale.</h2>
        <p className="section-body">
          we've architected and delivered AI systems inside organizations with
          millions of users, handling production pipelines with real data,
          real load, and real consequences.<br /><br />
          the difference between a working model and a working product is everything.
        </p>
        <Link to="/contact" className="section-link">
          work with us
          <span className="material-symbols-outlined hero-btn-arrow" aria-hidden="true">arrow_forward</span>
        </Link>
      </div>
      <div className="section-visual">
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">ai-scale.sh</span>
          </div>
          <div className="term-claude-input">
            <span className="term-claude-prompt">&gt;&nbsp;</span>
            <span className="term-line-bright">build a production RAG pipeline</span>
          </div>
          <div className="term-line">
            <span className="term-claude-label">claude</span>
          </div>
          <div className="term-line"><span className="term-claude-response">I'll read your existing setup first, then</span></div>
          <div className="term-line"><span className="term-claude-response">build the full pipeline end to end —</span></div>
          <div className="term-line"><span className="term-claude-response">ingestion, vector store, retrieval chain,</span></div>
          <div className="term-line"><span className="term-claude-response">and LLM integration. all handled.</span></div>
          <div className="term-line"><span>&nbsp;</span></div>
          <div className="term-line">
            <span className="term-claude-bullet">● </span>
            <span className="term-line-dim">Reading and implementing...</span>
          </div>
          <div className="term-line">
            <span className="term-line-dim">{'  ⎿ '}src/ai/pipeline.ts</span>
          </div>
          <div className="term-line"><span>&nbsp;</span></div>
          <div className="term-line"><span className="term-claude-response">tests passing. nothing broken.</span></div>
          <div className="term-line"><span>&nbsp;</span></div>
          <div className="term-line"><span className="term-line-green">{'✓ '}pipeline live. millions of users.</span></div>
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
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">team.sh</span>
          </div>
          <div className="term-line">
            <span className="term-line-prompt">$</span>
            <span className="term-line-bright">git blame PaymentService.java</span>
          </div>
          <div className="term-line"><span>&nbsp;</span></div>
          <div className="term-line">
            <span className="term-blame-author">alice </span>
            <span className="term-line-dim">│ </span>
            <span className="term-line-dim">public </span><span className="term-line-bright">PaymentResult</span><span className="term-line-dim"> processPayment(</span>
          </div>
          <div className="term-line">
            <span className="term-blame-author">alice </span>
            <span className="term-line-dim">│ </span>
            <span className="term-line-dim">{'    PaymentRequest req, SecurityCtx ctx) {'}</span>
          </div>
          <div className="term-line">
            <span className="term-blame-author">      </span>
            <span className="term-line-dim">│</span>
          </div>
          <div className="term-line">
            <span className="term-blame-author">marcus</span>
            <span className="term-line-dim">│ </span>
            <span className="term-line-dim">{'  ctx.'}</span><span className="term-line-bright">verify</span><span className="term-line-dim">{'(req.getToken());'}</span>
          </div>
          <div className="term-line">
            <span className="term-blame-author">priya </span>
            <span className="term-line-dim">│ </span>
            <span className="term-line-dim">{'  Order order = orderSvc.'}</span><span className="term-line-bright">resolve</span><span className="term-line-dim">{'(req);'}</span>
          </div>
          <div className="term-line">
            <span className="term-blame-author">priya </span>
            <span className="term-line-dim">│ </span>
            <span className="term-line-dim">{'  ledger.'}</span><span className="term-line-bright">record</span><span className="term-line-dim">{'(order);'}</span>
          </div>
          <div className="term-line">
            <span className="term-blame-author">james </span>
            <span className="term-line-dim">│ </span>
            <span className="term-line-dim">{'  return notifier.'}</span><span className="term-line-bright">confirm</span><span className="term-line-dim">{'(order);'}</span>
          </div>
          <div className="term-line">
            <span className="term-blame-author">alice </span>
            <span className="term-line-dim">│ </span>
            <span className="term-line-dim">{'}'}</span>
          </div>
          <div className="term-line"><span>&nbsp;</span></div>
          <div className="term-line"><span className="term-line-green">// every line reviewed & owned.</span></div>
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
        <div className="term-panel">
          <div className="term-panel-bar">
            <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
            <span className="term-panel-title">incident.log</span>
          </div>
          <div className="term-line"><span>&nbsp;</span></div>
          <div className="term-line">
            <span className="term-line-dim">incident · </span>
            <span className="term-line-bright">api-gateway</span>
            <span className="term-line-dim"> · 2024-03-14</span>
          </div>
          <div className="term-line"><span>&nbsp;</span></div>
          <div className="term-line">
            <span className="term-log-time term-line-dim">02:17</span>
            <span className="term-log-tag term-line-bright">ALERT</span>
            <span className="term-line-dim">p99 spike · 4.2s avg</span>
          </div>
          <div className="term-line">
            <span className="term-log-time term-line-dim">02:19</span>
            <span className="term-log-tag term-line-bright">PAGE</span>
            <span className="term-line-dim">on-call notified</span>
          </div>
          <div className="term-line">
            <span className="term-log-time term-line-dim">02:23</span>
            <span className="term-log-tag term-line-dim">IDENT</span>
            <span className="term-line-dim">pool exhaustion · auth svc</span>
          </div>
          <div className="term-line">
            <span className="term-log-time term-line-dim">02:31</span>
            <span className="term-log-tag term-line-green">FIX</span>
            <span className="term-line-dim">limit raised · rolling restart</span>
          </div>
          <div className="term-line">
            <span className="term-log-time term-line-dim">02:38</span>
            <span className="term-log-tag term-line-green">CLEAR</span>
            <span className="term-line-dim">p99 nominal · 98ms</span>
          </div>
          <div className="term-line">
            <span className="term-log-time term-line-dim">02:41</span>
            <span className="term-log-tag term-line-dim">POST</span>
            <span className="term-line-dim">root cause documented</span>
          </div>
          <div className="term-line"><span>&nbsp;</span></div>
          <div className="term-line"><span className="term-line-green">// 21 min MTTR. zero data loss.</span></div>
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
