import React, { useState, useEffect, useRef } from 'react';
import '../Layout.css';
import './ContactPage.css';

const SEQUENCE = [
  { text: 'initializing contact protocol...', delay: 0 },
  { text: 'resolving host linkedin.com...', delay: 600 },
  { text: 'establishing secure connection...', delay: 1300 },
  { text: 'handshake complete.', delay: 3600 },
  { text: '', delay: 4300 },
  { text: 'contact: edward cernera', delay: 4300 },
  { text: 'handle: linkedin.com/in/edwardcernera', delay: 5000 },
  { text: '', delay: 5700 },
  { text: '[ press enter or click to connect ]', delay: 5700 },
];

const CHAR_DELAY = 28;

const ContactPage = () => {
  const [lines, setLines] = useState<{ text: string; done: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [ready, setReady] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const openLink = () => window.open('https://www.linkedin.com/in/edwardcernera/', '_blank');

  useEffect(() => {
    SEQUENCE.forEach((item, i) => {
      const t = setTimeout(() => {
        setCurrentLine(i);
        setCurrentChar(0);
        setLines(prev => [...prev, { text: item.text, done: false }]);
        if (i === SEQUENCE.length - 1) {
          setTimeout(() => setReady(true), item.text.length * CHAR_DELAY + 100);
        }
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
        <div className="section-text">
          <h2 className="section-heading">get in touch</h2>
          <div className="contact-sequence">
            {lines.map((line, i) => {
              if (line.text === '') return <div key={i} className="contact-spacer" />;
              const isLast = i === currentLine && !line.done;
              const displayed = isLast ? line.text.slice(0, currentChar) : line.text;
              const isLink = line.text.startsWith('handle:');
              const isPrompt = line.text.startsWith('[');
              const isHandshake = line.text.startsWith('handshake');
              return (
                <div key={i} className="contact-line">
                  <span
                    className={
                      isPrompt
                        ? `contact-text contact-prompt${ready ? ' contact-prompt--active' : ''}`
                        : `contact-text${isLink ? ' contact-link' : ''}${isHandshake ? ' contact-handshake' : ''}`
                    }
                    onClick={isPrompt && ready ? openLink : undefined}
                    style={isPrompt && ready ? { cursor: 'pointer' } : undefined}
                  >
                    {displayed}
                  </span>
                  {isLast && <span className="contact-typer-cursor" />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="section-visual">
          <div className="term-panel">
            <div className="term-panel-bar">
              <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
              <span className="term-panel-title">contact.py</span>
            </div>
            <div className="term-line">
              <span className="term-line-prompt">&gt;</span>
              <span>contact: edward cernera</span>
            </div>
            <div className="term-line">
              <span className="term-line-prompt">&gt;</span>
              <span>via: linkedin</span>
            </div>
            <div className="term-line">
              <span className="term-line-prompt">&gt;</span>
              <span className="term-line-bright">linkedin.com/in/edwardcernera</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
