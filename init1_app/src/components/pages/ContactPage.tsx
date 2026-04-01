import React, { useState, useEffect, useRef } from 'react';
import '../Layout.css';
import './ContactPage.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/edwardcernera/';

const SEQUENCE = [
  { text: 'initializing contact protocol...', delay: 0 },
  { text: 'resolving host linkedin.com...',   delay: 700 },
  { text: 'establishing secure connection...', delay: 1500 },
  { text: 'handshake complete.',              delay: 2600 },
];

const CHAR_DELAY = 28;

const ContactPage = () => {
  const [lines, setLines] = useState<{ text: string; done: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    SEQUENCE.forEach((item, i) => {
      const t = setTimeout(() => {
        setCurrentLine(i);
        setCurrentChar(0);
        setLines(prev => [...prev, { text: item.text, done: false }]);
      }, item.delay);
      timeouts.current.push(t);
    });
    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (lines.length === 0) return;
    const line = lines[currentLine];
    if (!line || line.done) return;
    if (currentChar >= line.text.length) {
      setLines(prev => prev.map((l, i) => i === currentLine ? { ...l, done: true } : l));
      return;
    }
    const t = setTimeout(() => setCurrentChar(c => c + 1), CHAR_DELAY);
    return () => clearTimeout(t);
  }, [currentLine, currentChar, lines]);

  return (
    <div className="page">

      <div className="hero hero--small">
        <div className="hero-scanlines" />
        <div className="hero-content">
          <span className="hero-eyebrow">// init1 / contact</span>
          <h1 className="hero-title">contact</h1>
          <span className="hero-cursor" aria-hidden="true" />
        </div>
      </div>

      <section className="section">

        {/* ── Left: intro + terminal animation ── */}
        <div className="section-text">
          <h2 className="section-heading">get in touch</h2>
          <p className="section-body">
            ready to start a project or explore a partnership?
            <br />reach out directly on linkedin.
          </p>
          <div className="contact-sequence">
            {lines.map((line, i) => {
              const isLast = i === currentLine && !line.done;
              const displayed = isLast ? line.text.slice(0, currentChar) : line.text;
              const isHandshake = line.text.startsWith('handshake');
              return (
                <div key={i} className="contact-line">
                  <span className={`contact-text${isHandshake ? ' contact-handshake' : ''}`}>
                    {displayed}
                  </span>
                  {isLast && <span className="contact-typer-cursor" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right: contact card ── */}
        <div className="section-visual">
          <div className="contact-card">
            <div className="contact-card-name">edward cernera</div>
            <div className="contact-card-role">principal engineer · init1 llc</div>
            <div className="contact-card-divider" />
            <div className="contact-card-handle">
              <i className="fa-brands fa-linkedin contact-card-handle-icon" aria-hidden="true" />
              linkedin.com/in/edwardcernera
            </div>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-linkedin-btn"
            >
              <i className="fa-brands fa-linkedin" aria-hidden="true" />
              connect on linkedin
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};

export default ContactPage;
