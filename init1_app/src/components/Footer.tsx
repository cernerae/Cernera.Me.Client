import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">

      <div className="footer-brand">
        <Link to="/" className="footer-brand-name">init1</Link>
        <span className="footer-brand-sub">// software engineering firm</span>
      </div>

      <nav className="footer-nav">
        <span className="footer-col-label">navigate</span>
        <Link to="/about"    className="footer-link">about</Link>
        <Link to="/services" className="footer-link">services</Link>
        <Link to="/experience" className="footer-link">experience</Link>
        <Link to="/contact"  className="footer-link">contact</Link>
      </nav>

      <div className="footer-contact">
        <span className="footer-col-label">contact</span>
        <a href="mailto:devs@init1.biz" className="footer-link">
          devs@init1.biz
        </a>
        <a
          href="https://www.linkedin.com/company/init1-llc"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true" />
          linkedin.com/company/init1-llc
        </a>
      </div>

    </div>

    <div className="footer-bar">
      <span className="footer-copy">© {YEAR} init1 LLC. all rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
