import React, { useEffect, useRef, useState } from 'react';

const CMD     = 'git log --oneline';
const CHAR_MS = 18;
const WAIT_MS = 900;

const COMMITS = [
  { hash: 'a3f2c1d', author: 'alice ', message: 'feat: distributed cache layer'  },
  { hash: '7d8e9f2', author: 'marcus', message: 'fix: auth race condition'        },
  { hash: 'c4b5e6a', author: 'priya ', message: 'refactor: payment service'       },
  { hash: '9e1f2g3', author: 'james ', message: 'feat: API rate limiting'         },
  { hash: 'b8c9d0e', author: 'sarah ', message: 'fix: SQL injection patch'        },
];

const GitTerminal: React.FC = () => {
  const [cmdLen,      setCmdLen]      = useState(0);
  const [newLineCursor, setNewLineCursor] = useState(false);
  const [showOutput,  setShowOutput]  = useState(false);
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
        timers.current.push(setTimeout(() => setNewLineCursor(true),  cmdDone));
        timers.current.push(setTimeout(() => setNewLineCursor(false), cmdDone + WAIT_MS));
        timers.current.push(setTimeout(() => setShowOutput(true),     cmdDone + WAIT_MS));
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
        <span className="term-panel-title">team.sh</span>
      </div>
      <div className="term-line">
        <span className="term-line-prompt">$</span>
        <span className="term-line-bright">{CMD.slice(0, cmdLen)}</span>
        {!cmdDone && <span className="cursor-blink" />}
      </div>
      <div className="term-line" style={{ opacity: newLineCursor ? 1 : 0 }}>
        <span className="cursor-blink" />
      </div>
      <div style={{ opacity: showOutput ? 1 : 0 }}>
        <div className="term-line">&nbsp;</div>
        {COMMITS.map((c, i) => (
          <div key={i} className="term-line">
            <span className="term-line-dim">{c.hash}&nbsp;&nbsp;</span>
            <span className="term-line-bright">{c.author}&nbsp;&nbsp;</span>
            <span className="term-line-dim">{c.message}</span>
          </div>
        ))}
        <div className="term-line">&nbsp;</div>
        <div className="term-line">
          <span className="term-line-green">// 20+ engineers. every line reviewed.</span>
        </div>
      </div>
    </div>
  );
};

export default GitTerminal;
