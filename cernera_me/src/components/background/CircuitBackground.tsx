import React, { useEffect, useRef } from "react";
import styles from "./CircuitBackground.module.scss";

const COLORS = ["#00e5ff", "#ff0066", "#69ff47", "#7b00ff"];

const CONFIG = {
  nodeCount: 55,
  connectionDist: 160,
  nodeSpeed: 0.18,
  nodeRadius: 2.2,
  traceOpacityMax: 0.18,
  nodeOpacityMax: 0.45,
  pulseCount: 6,
  pulseSpeed: 1.6,
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

    let W = 0, H = 0;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let lastPulseSpawn = 0;
    let rafId: number;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

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

    function makePulse(a: Node, b: Node): Pulse {
      return {
        ax: a.x, ay: a.y,
        bx: b.x, by: b.y,
        t: 0,
        color: a.color,
        speed: CONFIG.pulseSpeed / 100,
      };
    }

    function spawnPulse() {
      if (pulses.length >= CONFIG.pulseCount) return;
      for (let i = 0; i < 20; i++) {
        const a = nodes[Math.floor(Math.random() * nodes.length)];
        const b = nodes[Math.floor(Math.random() * nodes.length)];
        if (a === b) continue;
        const dx = b.x - a.x, dy = b.y - a.y;
        if (Math.sqrt(dx * dx + dy * dy) < CONFIG.connectionDist) {
          pulses.push(makePulse(a, b));
          return;
        }
      }
    }

    function glowLine(x1: number, y1: number, x2: number, y2: number, color: string, alpha: number, width = 1) {
      ctx.save();
      ctx.globalAlpha = alpha * 0.4;
      ctx.strokeStyle = color;
      ctx.lineWidth = width + 2;
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.globalAlpha = alpha;
      ctx.lineWidth = width;
      ctx.shadowBlur = 0;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.restore();
    }

    function glowDot(x: number, y: number, r: number, color: string, alpha: number) {
      ctx.save();
      ctx.globalAlpha = alpha * 0.35;
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 14;
      ctx.beginPath(); ctx.arc(x, y, r + 2, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = 0;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }

    function draw(timestamp: number) {
      ctx.clearRect(0, 0, W, H);

      if (!lastPulseSpawn || timestamp - lastPulseSpawn > CONFIG.pulseSpawnInterval) {
        spawnPulse();
        lastPulseSpawn = timestamp;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= CONFIG.connectionDist) continue;
          const t = 1 - dist / CONFIG.connectionDist;
          glowLine(a.x, a.y, b.x, b.y, a.color, t * CONFIG.traceOpacityMax, 0.8);
        }
      }

      pulses = pulses.filter(p => {
        p.t += p.speed;
        if (p.t >= 1) return false;
        const px = p.ax + (p.bx - p.ax) * p.t;
        const py = p.ay + (p.by - p.ay) * p.t;
        const tailT = Math.max(0, p.t - 0.15);
        glowLine(
          p.ax + (p.bx - p.ax) * tailT,
          p.ay + (p.by - p.ay) * tailT,
          px, py, p.color, 0.55, 1.5
        );
        glowDot(px, py, 2.5, p.color, 0.9);
        return true;
      });

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0)  { n.x = 0;  n.vx *= -1; }
        if (n.x > W)  { n.x = W;  n.vx *= -1; }
        if (n.y < 0)  { n.y = 0;  n.vy *= -1; }
        if (n.y > H)  { n.y = H;  n.vy *= -1; }
        n.phase += n.phaseSpeed;
        glowDot(n.x, n.y, CONFIG.nodeRadius, n.color, CONFIG.nodeOpacityMax * (0.5 + 0.5 * Math.sin(n.phase)));
      }

      rafId = requestAnimationFrame(draw);
    }

    function onResize() {
      resize();
      for (const n of nodes) {
        n.x = Math.min(n.x, W);
        n.y = Math.min(n.y, H);
      }
    }

    resize();
    nodes = Array.from({ length: CONFIG.nodeCount }, makeNode);
    pulses = [];
    rafId = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const cornerSvg = (color: string) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="2,24 2,2 24,2" stroke={color} strokeWidth="1.5" opacity="0.5" />
      <polyline points="2,8 2,2 8,2"   stroke={color} strokeWidth="3"   opacity="0.9" />
      <circle cx="2" cy="2" r="2.5" fill={color} opacity="0.9" />
    </svg>
  );

  return (
    <>
      <canvas ref={canvasRef} className={styles["circuit-canvas"]} />
      <div className={styles["hex-grid"]} />
      <div className={styles["scanlines"]} />
      <div className={styles["vignette"]} />
      <div className={`${styles["corner"]} ${styles["corner--tl"]}`}>{cornerSvg("#00e5ff")}</div>
      <div className={`${styles["corner"]} ${styles["corner--tr"]}`}>{cornerSvg("#ff0066")}</div>
      <div className={`${styles["corner"]} ${styles["corner--bl"]}`}>{cornerSvg("#69ff47")}</div>
      <div className={`${styles["corner"]} ${styles["corner--br"]}`}>{cornerSvg("#7b00ff")}</div>
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
