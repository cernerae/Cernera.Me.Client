import React, { useEffect, useRef, useState } from 'react';

const CMD = 'nmap -sV --script vuln 10.0.0.0/24';
const CHAR_MS = 16;

type LineKind = 'blank' | 'host' | 'result' | 'final';

const LINES: { kind: LineKind; delay: number; text?: string; label?: string }[] = [
  { kind: 'blank',  delay: 120  },
  { kind: 'host',   delay: 280,  text: 'host 10.0.0.1 ', label: '[firewall]'    },
  { kind: 'host',   delay: 500,  text: 'host 10.0.0.14', label: '[auth]'        },
  { kind: 'host',   delay: 720,  text: 'host 10.0.0.22', label: '[api-gateway]' },
  { kind: 'blank',  delay: 900  },
  { kind: 'result', delay: 1050, text: 'CVEs found   ' },
  { kind: 'result', delay: 1250, text: 'auth gaps    ' },
  { kind: 'result', delay: 1450, text: 'misconfigs   ' },
  { kind: 'blank',  delay: 1600 },
  { kind: 'final',  delay: 1750, text: '// infrastructure clear.' },
];

const SecurityTerminal: React.FC = () => {
  const [cmdLen, setCmdLen]       = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const ref    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        for (let i = 1; i <= CMD.length; i++) {
          timers.current.push(setTimeout(() => setCmdLen(i), i * CHAR_MS));
        }

        const cmdDone = CMD.length * CHAR_MS;
        LINES.forEach((line, idx) => {
          timers.current.push(
            setTimeout(() => setLineCount(idx + 1), cmdDone + line.delay)
          );
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timers.current.forEach(clearTimeout);
    };
  }, []);

  const cmdDone = cmdLen === CMD.length;

  return (
    <div className="term-panel" ref={ref}>
      <div className="term-panel-bar">
        <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
        <span className="term-panel-title">security.sh</span>
      </div>
      <div className="term-line">
        <span>
          <span className="term-kali-box">┌──</span>
          <span className="term-kali-host">(root@kali)</span>
          <span className="term-kali-box">-</span>
          <span className="term-kali-path">[~/gov/audit]</span>
        </span>
      </div>
      <div className="term-line">
        <span>
          <span className="term-kali-box">└─</span>
          <span className="term-kali-root"># </span>
          <span className="term-line-bright">{CMD.slice(0, cmdLen)}</span>
          {!cmdDone && <span className="cursor-blink" />}
        </span>
      </div>
      {LINES.map((line, i) => (
        <div key={i} className="term-line" style={{ opacity: i < lineCount ? 1 : 0 }}>
          {line.kind === 'blank' && <span>&nbsp;</span>}
          {line.kind === 'host' && (
            <>
              <span className="term-line-dim" style={{ whiteSpace: 'pre' }}>{line.text} </span>
              <span className="term-line-green">up</span>
              <span className="term-line-dim"> {line.label}</span>
            </>
          )}
          {line.kind === 'result' && (
            <>
              <span className="term-line-dim" style={{ whiteSpace: 'pre' }}>{line.text} </span>
              <span className="term-line-green">0</span>
            </>
          )}
          {line.kind === 'final' && (
            <span className="term-line-green">{line.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SecurityTerminal;
