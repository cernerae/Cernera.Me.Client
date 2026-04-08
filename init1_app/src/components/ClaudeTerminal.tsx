import React, { useEffect, useRef, useState } from 'react';

const CMD             = 'build a production RAG pipeline';
const CMD_CHAR_MS     = 15;
const RESPONSE_CHAR_MS = 12;

const RESPONSE_LINES = [
  "I'll read your existing setup first, then",
  'build the full pipeline end to end —',
  'ingestion, vector store, retrieval chain,',
  'and LLM integration. all handled.',
];

const TOTAL_RESPONSE_CHARS = RESPONSE_LINES.reduce((sum, l) => sum + l.length, 0);

type OutputKind = 'blank' | 'bullet' | 'sub' | 'comment' | 'final';

const OUTPUT: { kind: OutputKind; delay: number; text?: string }[] = [
  { kind: 'blank',   delay: 100  },
  { kind: 'bullet',  delay: 280,  text: 'Reading and implementing...' },
  { kind: 'sub',     delay: 460,  text: 'src/ai/pipeline.ts'          },
  { kind: 'blank',   delay: 620  },
  { kind: 'comment', delay: 800,  text: 'tests passing. nothing broken.' },
  { kind: 'blank',   delay: 980  },
  { kind: 'final',   delay: 1120, text: 'pipeline live. millions of users.' },
];

function getVisibleLines(totalChars: number): string[] {
  let remaining = totalChars;
  return RESPONSE_LINES.map(line => {
    const visible = Math.min(remaining, line.length);
    remaining    = Math.max(0, remaining - line.length);
    return line.slice(0, visible);
  });
}

const ClaudeTerminal: React.FC = () => {
  const [cmdLen,        setCmdLen]        = useState(0);
  const [showLabel,     setShowLabel]     = useState(false);
  const [responseTotal, setResponseTotal] = useState(0);
  const [lineCount,     setLineCount]     = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const ref    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // Type CMD
        for (let i = 1; i <= CMD.length; i++) {
          timers.current.push(setTimeout(() => setCmdLen(i), i * CMD_CHAR_MS));
        }

        const cmdDone = CMD.length * CMD_CHAR_MS;

        // Show label then start typing response
        timers.current.push(setTimeout(() => setShowLabel(true), cmdDone + 200));

        const responseStart = cmdDone + 350;
        for (let i = 1; i <= TOTAL_RESPONSE_CHARS; i++) {
          timers.current.push(
            setTimeout(() => setResponseTotal(i), responseStart + i * RESPONSE_CHAR_MS)
          );
        }

        // Output lines after response finishes
        const responseDone = responseStart + TOTAL_RESPONSE_CHARS * RESPONSE_CHAR_MS;
        OUTPUT.forEach((line, idx) => {
          timers.current.push(
            setTimeout(() => setLineCount(idx + 1), responseDone + line.delay)
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

  const cmdDone      = cmdLen === CMD.length;
  const responseDone = responseTotal === TOTAL_RESPONSE_CHARS;
  const visibleLines = getVisibleLines(responseTotal);

  // Find which response line the cursor sits on while typing
  let cursorLine = -1;
  if (showLabel && !responseDone) {
    let counted = 0;
    for (let i = 0; i < RESPONSE_LINES.length; i++) {
      if (responseTotal <= counted + RESPONSE_LINES[i].length) {
        cursorLine = i;
        break;
      }
      counted += RESPONSE_LINES[i].length;
    }
  }

  return (
    <div className="term-panel" ref={ref}>
      <div className="term-panel-bar">
        <div className="term-dot" /><div className="term-dot" /><div className="term-dot" />
        <span className="term-panel-title">ai-scale.sh</span>
      </div>

      <div className="term-claude-input">
        <span className="term-claude-prompt">&gt;&nbsp;</span>
        <span className="term-line-bright">{CMD.slice(0, cmdLen)}</span>
        {!cmdDone && <span className="cursor-blink" />}
      </div>

      <div className="term-line" style={{ opacity: showLabel ? 1 : 0 }}>
        <span className="term-claude-label">claude</span>
      </div>

      {RESPONSE_LINES.map((_, i) => (
        <div key={i} className="term-line" style={{ opacity: showLabel ? 1 : 0 }}>
          <span className="term-claude-response">{visibleLines[i] || '\u00A0'}</span>
          {cursorLine === i && <span className="cursor-blink" />}
        </div>
      ))}

      {OUTPUT.map((line, i) => (
        <div key={i} className="term-line" style={{ opacity: i < lineCount ? 1 : 0 }}>
          {line.kind === 'blank'   && <span>&nbsp;</span>}
          {line.kind === 'bullet'  && <><span className="term-claude-bullet">● </span><span className="term-line-dim">{line.text}</span></>}
          {line.kind === 'sub'     && <span className="term-line-dim">{'  ⎿ '}{line.text}</span>}
          {line.kind === 'comment' && <span className="term-claude-response">{line.text}</span>}
          {line.kind === 'final'   && <span className="term-line-green">{'✓ '}{line.text}</span>}
        </div>
      ))}
    </div>
  );
};

export default ClaudeTerminal;
