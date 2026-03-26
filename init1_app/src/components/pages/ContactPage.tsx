import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
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

type Selected = null | 'link' | 'back';

const ContactPage = () => {
  const navigate = useNavigate();
  const [lines, setLines] = useState<{ text: string; done: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [selected, setSelected] = useState<Selected>(null);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace' || e.key === 'Escape') {
        navigate('/');
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected(s => {
          if (s === null) return ready ? 'link' : 'back';
          if (s === 'link') return 'back';
          return 'back';
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected(s => {
          if (s === 'back') return ready ? 'link' : null;
          if (s === 'link') return null;
          return null;
        });
      } else if (e.key === 'Enter') {
        if (selected === 'back') navigate('/');
        else if (selected === 'link' && ready) openLink();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, ready, selected]);

  return (
    <div className="crt-screen">
      <div className="scanlines" />
      <div className="terminal-container">
        <span className="terminal-text">
          {'>'} init1/contact
          <span className={selected !== null ? 'static-cursor' : 'blinking-cursor'} aria-hidden="true" />
        </span>
        <div className="contact-sequence">
          {lines.map((line, i) => {
            if (line.text === '') return <div key={i} className="contact-spacer" />;
            const isLast = i === currentLine && !line.done;
            const displayed = isLast ? line.text.slice(0, currentChar) : line.text;
            const isLink = line.text.startsWith('handle:');
            const isPrompt = line.text.startsWith('[');
            const isHandshake = line.text.startsWith('handshake');
            const promptSelected = isPrompt && selected === 'link';
            return (
              <div key={i} className="contact-line">
                <span
                  className={
                    isPrompt
                      ? `contact-text contact-prompt${promptSelected ? ' contact-prompt--selected' : ''}`
                      : `contact-text${isLink ? ' contact-link' : ''}${isHandshake ? ' contact-handshake' : ''}`
                  }
                  onClick={isPrompt && ready ? openLink : undefined}
                  onMouseEnter={isPrompt && ready ? () => setSelected('link') : undefined}
                  onMouseLeave={isPrompt && ready ? () => setSelected(null) : undefined}
                  style={isPrompt && ready ? { cursor: 'pointer' } : undefined}
                >
                  {displayed}
                </span>
                {isLast && <span className="contact-typer-cursor" />}
              </div>
            );
          })}
        </div>
        <span
          className={`file-item${selected === 'back' ? ' file-item--selected' : ''}`}
          onClick={() => navigate('/')}
          onMouseEnter={() => setSelected('back')}
          onMouseLeave={() => setSelected(null)}
        >
          cd ..
        </span>
      </div>
    </div>
  );
};

export default ContactPage;
