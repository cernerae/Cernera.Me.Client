import React from 'react';
import '../Layout.css';
import './ServicesPage.css';

// ─── Add or remove services here ──────────────────────────────────────────────
const SERVICES = [
  { icon: 'fa-solid fa-laptop-code', name: 'web development',         desc: 'full-stack applications built for production.' },
  { icon: 'fa-solid fa-brain',       name: 'applied ai solutions',    desc: 'llm integration, ml pipelines, and ai-powered features.' },
  { icon: 'fa-solid fa-sitemap',     name: 'system architecture',     desc: 'distributed systems designed for reliability and scale.' },
  { icon: 'fa-solid fa-plug',        name: 'api development',         desc: 'restful and graphql apis, production-ready.' },
  { icon: 'fa-solid fa-database',    name: 'database engineering',    desc: 'schema design, query optimization, and migrations.' },
  { icon: 'fa-solid fa-cloud',       name: 'cloud & devops',          desc: 'infrastructure, ci/cd pipelines, and deployment.' },
  { icon: 'fa-solid fa-handshake',   name: 'enterprise consulting',   desc: 'technical strategy and team augmentation.' },
  { icon: 'fa-solid fa-shield-halved', name: 'security & hardening', desc: 'code audits, auth systems, and compliance.' },
];
// ──────────────────────────────────────────────────────────────────────────────

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

    <div className="services-section">
      <div className="services-grid">
        {SERVICES.map(svc => (
          <div className="service-card" key={svc.name}>
            <i className={`service-icon ${svc.icon}`} aria-hidden="true" />
            <span className="service-name">{svc.name}</span>
            <p className="service-desc">{svc.desc}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
);

export default ServicesPage;
