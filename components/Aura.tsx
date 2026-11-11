"use client";
import { useEffect, useRef } from "react";

type Mode = "reiki" | "registros";

/** Ilustración generativa de cada práctica: energía que orbita (Reiki) o hilos de luz que suben (Registros). */
export default function Aura({ mode }: { mode: Mode }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    const size = () => {
      W = c.clientWidth;
      H = c.clientHeight;
      c.width = W * dpr;
      c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(c);

    const N = mode === "reiki" ? 260 : 220;
    const ps = Array.from({ length: N }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 0.18 + Math.pow(Math.random(), 0.7) * 0.38,
      s: (0.0015 + Math.random() * 0.004) * (Math.random() < 0.5 ? 1 : -1),
      z: Math.random(),
      t: Math.random(),
      lane: Math.floor(Math.random() * 7),
      sp: 0.0012 + Math.random() * 0.0035,
      sz: Math.random() * 1.6 + 0.4,
    }));
    const warm = ["255,226,179", "237,166,92", "217,127,104"];
    const cool = ["237,166,92", "255,226,179", "190,170,255"];

    let pointer = { x: 0.5, y: 0.5, k: 0 };
    const host = c.parentElement!;
    const mv = (e: PointerEvent) => {
      const b = c.getBoundingClientRect();
      pointer = { x: (e.clientX - b.left) / b.width, y: (e.clientY - b.top) / b.height, k: 1 };
    };
    const lv = () => (pointer.k = 0);
    host.addEventListener("pointermove", mv, { passive: true });
    host.addEventListener("pointerleave", lv);

    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(c);
    let raf = 0;
    let breath = 0;

    const draw = (now: number) => {
      if (visible) {
        ctx.clearRect(0, 0, W, H);
        breath = 1 + Math.sin(now / 1600) * 0.06;
        const m = Math.min(W, H);
        if (mode === "reiki") {
          const cx = W / 2, cy = H * 0.46;
          const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, m * 0.42 * breath);
          g.addColorStop(0, "rgba(255,236,200,.55)");
          g.addColorStop(0.4, "rgba(237,166,92,.18)");
          g.addColorStop(1, "rgba(237,166,92,0)");
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, W, H);
          ctx.globalCompositeOperation = "lighter";
          for (const p of ps) {
            p.a += p.s * (1 + pointer.k * 1.5);
            const rr = p.r * m * breath;
            const x = cx + Math.cos(p.a) * rr;
            const y = cy + Math.sin(p.a) * rr * (0.55 + p.z * 0.35);
            const tw = 0.45 + 0.55 * Math.sin(now / 700 + p.t * 20);
            ctx.fillStyle = `rgba(${warm[p.lane % 3]},${0.25 + tw * 0.6})`;
            ctx.beginPath();
            ctx.arc(x, y, p.sz * (0.7 + p.z), 0, 6.283);
            ctx.fill();
          }
          ctx.globalCompositeOperation = "source-over";
        } else {
          const ox = W / 2, oy = H * 0.74;
          const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, m * 0.5);
          g.addColorStop(0, "rgba(255,226,179,.45)");
          g.addColorStop(0.35, "rgba(160,130,230,.14)");
          g.addColorStop(1, "rgba(120,100,200,0)");
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, W, H);
          // hilos
          ctx.lineWidth = 1;
          for (let l = 0; l < 7; l++) {
            const spread = (l - 3) / 3;
            ctx.strokeStyle = `rgba(237,166,92,${0.12 + 0.08 * Math.sin(now / 900 + l)})`;
            ctx.beginPath();
            ctx.moveTo(ox, oy);
            ctx.bezierCurveTo(ox + spread * W * 0.05, oy - H * 0.3, ox + spread * W * 0.3, oy - H * 0.5, ox + spread * W * 0.46, H * 0.04);
            ctx.stroke();
          }
          ctx.globalCompositeOperation = "lighter";
          for (const p of ps) {
            p.t += p.sp * (1 + pointer.k);
            if (p.t > 1) {
              p.t = 0;
              p.lane = Math.floor(Math.random() * 7);
            }
            const spread = (p.lane - 3) / 3;
            const t = p.t, u = 1 - t;
            const x0 = ox, y0 = oy;
            const x1 = ox + spread * W * 0.05, y1 = oy - H * 0.3;
            const x2 = ox + spread * W * 0.3, y2 = oy - H * 0.5;
            const x3 = ox + spread * W * 0.46, y3 = H * 0.04;
            const x = u * u * u * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3 + Math.sin(now / 500 + p.a) * 3;
            const y = u * u * u * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3;
            const alpha = Math.sin(t * Math.PI) * 0.9;
            ctx.fillStyle = `rgba(${cool[p.lane % 3]},${alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, p.sz * (0.6 + p.z), 0, 6.283);
            ctx.fill();
          }
          ctx.globalCompositeOperation = "source-over";
        }
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", mv);
      host.removeEventListener("pointerleave", lv);
    };
  }, [mode]);

  return <canvas ref={ref} className="aura-canvas" aria-hidden="true" />;
}
