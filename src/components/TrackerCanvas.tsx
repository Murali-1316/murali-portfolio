"use client";

import { useEffect, useRef } from "react";

type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  label: string;
  color: string;
};

const W = 300;
const H = 190;

export function TrackerCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const boxes: Box[] = [
      { x: 40, y: 30, w: 60, h: 90, vx: 0.35, vy: 0.18, label: "person 0.94", color: "#3fc2b7" },
      { x: 170, y: 100, w: 80, h: 50, vx: -0.22, vy: 0.26, label: "vehicle 0.88", color: "#e2a65c" },
      { x: 110, y: 20, w: 46, h: 46, vx: 0.16, vy: -0.24, label: "cyclist 0.79", color: "#3fc2b7" },
    ];

    function drawGrid() {
      if (!ctx) return;
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= W; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y <= H; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    }

    function drawBox(b: Box) {
      if (!ctx) return;
      ctx.strokeStyle = b.color;
      ctx.lineWidth = 1.6;
      ctx.strokeRect(b.x, b.y, b.w, b.h);
      ctx.fillStyle = b.color;
      ctx.font = "9px monospace";
      const tw = ctx.measureText(b.label).width;
      ctx.fillRect(b.x - 0.8, b.y - 13, tw + 8, 12);
      ctx.fillStyle = "#0b0f12";
      ctx.fillText(b.label, b.x + 3, b.y - 4);
    }

    let raf = 0;
    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0b0f12";
      ctx.fillRect(0, 0, W, H);
      drawGrid();
      boxes.forEach((b) => {
        if (!reduceMotion) {
          b.x += b.vx;
          b.y += b.vy;
          if (b.x < 4 || b.x + b.w > W - 4) b.vx *= -1;
          if (b.y < 4 || b.y + b.h > H - 4) b.vy *= -1;
        }
        drawBox(b);
      });
      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    step();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="mt-[22px] border border-border bg-[#0b0f12] p-[10px]">
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        role="img"
        aria-label="Animated preview of an object-tracking model drawing bounding boxes"
        className="block h-auto w-full"
      />
      <div className="mt-2 font-mono text-[11px] text-text-faint">
        tracker preview · ByteTrack-style overlay
      </div>
    </div>
  );
}
