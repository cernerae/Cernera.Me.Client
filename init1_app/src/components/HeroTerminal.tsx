import React, { useEffect, useRef, useState } from 'react';

const CMD = '$ docker compose up --build -d';
const CHAR_MS = 22;

type LineKind = 'blank' | 'dim' | 'ok' | 'final';

const OUTPUT_LINES: { text: string; kind: LineKind; delay: number }[] = [
  { text: '',                                        kind: 'blank', delay: 150  },
  { text: ' => FROM node:20-alpine         cached',  kind: 'dim',   delay: 300  },
  { text: ' => RUN npm ci --production       4.1s',  kind: 'dim',   delay: 450  },
  { text: ' => COPY . /app                   0.1s',  kind: 'dim',   delay: 600  },
  { text: '',                                        kind: 'blank', delay: 800  },
  { text: 'Image built',                             kind: 'ok',    delay: 1000 },
  { text: 'Pushed to registry',                      kind: 'ok',    delay: 1350 },
  { text: 'Deployed to cluster',                     kind: 'ok',    delay: 1700 },
  { text: 'Health checks passed',                    kind: 'ok',    delay: 2050 },
  { text: '',                                        kind: 'blank', delay: 2350 },
  { text: 'Live in production.',                     kind: 'final', delay: 2550 },
];

const HeroTerminal: React.FC = () => {
  const [cmdLen, setCmdLen]       = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    for (let i = 1; i <= CMD.length; i++) {
      timers.current.push(setTimeout(() => setCmdLen(i), i * CHAR_MS));
    }

    const cmdDone = CMD.length * CHAR_MS;
    OUTPUT_LINES.forEach((line, idx) => {
      timers.current.push(
        setTimeout(() => setLineCount(idx + 1), cmdDone + line.delay)
      );
    });

    return () => timers.current.forEach(clearTimeout);
  }, []);

  const cmdDone = cmdLen === CMD.length;

  return (
    <div className="hero-terminal">
      <div className="hero-terminal-bar">
        <div className="term-dot" />
        <div className="term-dot" />
        <div className="term-dot" />
        <span className="hero-terminal-title">compose.yml</span>
      </div>
      <div className="hero-terminal-body">

        <div className="hero-terminal-line">
          <span className="hero-terminal-cmd">{CMD.slice(0, cmdLen)}</span>
          {!cmdDone && <span className="hero-terminal-cursor" />}
        </div>

        {OUTPUT_LINES.map((line, i) => (
          <div
            key={i}
            className="hero-terminal-line"
            style={{ opacity: i < lineCount ? 1 : 0 }}
          >
            {line.kind === 'ok' ? (
              <>
                <span className="hero-terminal-ok-text">{line.text}</span>
                <span className="hero-terminal-ok">✓</span>
              </>
            ) : line.kind === 'final' ? (
              <span className="hero-terminal-final">{line.text}</span>
            ) : (
              <span className="hero-terminal-output">{line.text}</span>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default HeroTerminal;
