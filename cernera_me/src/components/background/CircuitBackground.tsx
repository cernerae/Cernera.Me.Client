import React, { useEffect, useRef } from "react";
import styles from "./CircuitBackground.module.scss";

const COLORS = ["#00e5ff", "#ff0066", "#69ff47", "#7b00ff"];
const CONN_DIST    = 160;
const CONN_DIST_SQ = CONN_DIST * CONN_DIST;
const FRAME_MS     = 1000 / 60;

const CONFIG = {
  nodeCount:         55,
  nodeSpeed:         0.18,
  nodeRadius:        2.2,
  traceOpacityMax:   0.18,
  nodeOpacityMax:    0.45,
  pulseCount:        6,
  pulseSpeed:        1.6,
  pulseSpawnInterval: 800,
};

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  color: string;
  phase: number;
  phaseSpeed: number;
}

interface Pulse {
  ax: number; ay: number;
  bx: number; by: number;
  t: number;
  color: string;
  speed: number;
}

const CircuitBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Sized once at load — CSS (position: fixed; inset: 0) stretches to fill on resize
    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = window.innerHeight;

    let lastFrame      = 0;
    let lastPulseSpawn = 0;
    let rafId: number;

    function makeNode(): Node {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * CONFIG.nodeSpeed * 2,
        vy: (Math.random() - 0.5) * CONFIG.nodeSpeed * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.008 + Math.random() * 0.012,
      };
    }

    const nodes: Node[]  = Array.from({ length: CONFIG.nodeCount }, makeNode);
    const pulses: Pulse[] = [];

    function spawnPulse() {
      if (pulses.length >= CONFIG.pulseCount) return;
      for (let i = 0; i < 20; i++) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const b = nodes[Math.floor(Math.random() * nodes.length)];
        if (a === b) continue;
        const dx = b.x - a.x, dy = b.y - a.y;
        if (dx * dx + dy * dy < CONN_DIST_SQ) {
          pulses.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t: 0, color: a.color, speed: CONFIG.pulseSpeed / 100 });
          return;
        }
      }
    }

    // No shadowBlur, no save/restore — two-pass draw (wide+dim then sharp) for glow
    function glowLine(x1: number, y1: number, x2: number, y2: number, color: string, alpha: number, width = 1) {
      ctx.strokeStyle = color;
      ctx.globalAlpha = alpha * 0.4;
      ctx.lineWidth   = width + 2.5;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.globalAlpha = alpha;
      ctx.lineWidth   = width;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    }

    function glowDot(x: number, y: number, r: number, color: string, alpha: number) {
      ctx.fillStyle   = color;
      ctx.globalAlpha = alpha * 0.35;
      ctx.beginPath(); ctx.arc(x, y, r + 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = alpha;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }

    function draw(timestamp: number) {
      if (timestamp - lastFrame < FRAME_MS) {
        rafId = requestAnimationFrame(draw);
        return;
      }
      lastFrame = timestamp;

      ctx.clearRect(0, 0, W, H);

      if (!lastPulseSpawn || timestamp - lastPulseSpawn > CONFIG.pulseSpawnInterval) {
        spawnPulse();
        lastPulseSpawn = timestamp;
      }

      // Connections — squared distance for early exit, sqrt only when needed
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dSq = dx * dx + dy * dy;
          if (dSq >= CONN_DIST_SQ) continue;
          glowLine(a.x, a.y, b.x, b.y, a.color, (1 - Math.sqrt(dSq) / CONN_DIST) * CONFIG.traceOpacityMax, 0.8);
        }
      }

      // Pulses — backward loop avoids index shift on splice
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.t += p.speed;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        const px    = p.ax + (p.bx - p.ax) * p.t;
        const py    = p.ay + (p.by - p.ay) * p.t;
        const tailT = Math.max(0, p.t - 0.15);
        glowLine(p.ax + (p.bx - p.ax) * tailT, p.ay + (p.by - p.ay) * tailT, px, py, p.color, 0.55, 1.5);
        glowDot(px, py, 2.5, p.color, 0.9);
      }

      // Nodes
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        if (n.x > W) { n.x = W; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        if (n.y > H) { n.y = H; n.vy *= -1; }
        n.phase += n.phaseSpeed;
        glowDot(n.x, n.y, CONFIG.nodeRadius, n.color, CONFIG.nodeOpacityMax * (0.5 + 0.5 * Math.sin(n.phase)));
      }

      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafId); };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className={styles["circuit-canvas"]} />
      <div className={styles["hex-grid"]} />
      <div className={styles["scanlines"]} />
      <div className={styles["vignette"]} />
      <div className={styles["statusbar"]}>
        <div className={styles["statusbar__item"]}>
          <span className={styles["statusbar__dot"]} />
          ONLINE
        </div>
        <div className={styles["statusbar__item"]}>SYS::OK</div>
        <div className={styles["statusbar__item"]}>cernera.me</div>
      </div>
    </>
  );
};

export default CircuitBackground;