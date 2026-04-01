import React from 'react';
import '../Layout.css';
import './GalleryPage.css';

const ITEMS = [
  {
    label: 'htdemo.cernera.me',
    url: 'https://htdemo.cernera.me/',
    description: 'an interactive web demo showcasing front-end techniques and real-time rendering.',
  },
];

const GalleryPage = () => (
  <div className="page">

    <div className="hero hero--small">
      <div className="hero-scanlines" />
      <div className="hero-content">
        <span className="hero-eyebrow">// init1 / gallery</span>
        <h1 className="hero-title">gallery</h1>
        <span className="hero-cursor" aria-hidden="true" />
      </div>
    </div>

    {ITEMS.map((item, i) => (
      <section
        key={item.url}
        className={`section${i % 2 === 1 ? ' section--reverse' : ''}`}
      >
        <div className="section-text">
          <h2 className="section-heading">{item.label}</h2>
          <p className="section-body">{item.description}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="section-link"
          >
            open demo
          </a>
        </div>
        <div className="section-visual">
          <div className="term-panel">
            <div className="term-panel-bar">
              <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
              <span className="term-panel-title">gallery.js</span>
            </div>
            <div className="term-line">
              <span className="term-line-prompt">--</span>
              <span className="term-line-bright">{item.label}</span>
              <span className="term-line-green" style={{ fontSize: '0.74rem' }}>[OK]</span>
            </div>
          </div>
        </div>
      </section>
    ))}

  </div>
);

export default GalleryPage;
