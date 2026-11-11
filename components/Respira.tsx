"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { WaButton } from "./ui";

const FASES = [
  { id: "in", label: "Inhalá", ms: 4000, from: 0.55, to: 1 },
  { id: "hold", label: "Sostené", ms: 2000, from: 1, to: 1 },
  { id: "out", label: "Soltá", ms: 6000, from: 1, to: 0.55 },
] as const;
const CICLO = FASES.reduce((a, f) => a + f.ms, 0);
const DURACIONES = [
  { label: "1 minuto", ciclos: 5 },
  { label: "3 minutos", ciclos: 15 },
];

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function Respira() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [estado, setEstado] = useState<"idle" | "run" | "done">("idle");
  const [dur, setDur] = useState(0);
  const [fase, setFase] = useState<string>("");
  const [seg, setSeg] = useState(0);
  const [ciclo, setCiclo] = useState(0);
  const [prog, setProg] = useState(0);
  const run = useRef({ on: false, t0: 0, total: 0 });
  const scaleRef = useRef(0.7);
  const haloRef = useRef<HTMLSpanElement>(null);

  const start = useCallback(() => {
    run.current = { on: true, t0: performance.now(), total: DURACIONES[dur].ciclos * CICLO };
    setEstado("run");
  }, [dur]);

  const stop = useCallback((done = false) => {
    run.current.on = false;
    setEstado(done ? "done" : "idle");
    setFase("");
    setProg(done ? 1 : 0);
  }, []);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
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

    const N = 1300;
    const ps = Array.from({ length: N }, () => {
      const a = Math.random() * Math.PI * 2;
      // distribución concentrada hacia el borde de la esfera
      const r = Math.sqrt(Math.random()) * 0.9 + Math.random() * 0.1;
      return { a, r, z: Math.random(), w: (Math.random() - 0.5) * 0.004, ph: Math.random() * 6.28, sz: Math.random() * 1.5 + 0.35 };
    });

    let visible = true;
    const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
    io.observe(c);
    let raf = 0;
    let lastF = "", lastS = -1, lastC = -1, lastP = -1;

    const frame = (now: number) => {
      let target = 0.72 + Math.sin(now / 2400) * 0.05;
      if (run.current.on) {
        const el = now - run.current.t0;
        if (el >= run.current.total) {
          stop(true);
        } else {
          const inC = el % CICLO;
          let acc = 0;
          for (const f of FASES) {
            if (inC < acc + f.ms) {
              const t = (inC - acc) / f.ms;
              target = f.from + (f.to - f.from) * ease(t);
              const s = Math.ceil((f.ms - (inC - acc)) / 1000);
              if (f.label !== lastF) setFase((lastF = f.label));
              if (s !== lastS) setSeg((lastS = s));
              break;
            }
            acc += f.ms;
          }
          const cyc = Math.floor(el / CICLO) + 1;
          if (cyc !== lastC) setCiclo((lastC = cyc));
          const p = Math.round((el / run.current.total) * 400) / 400;
          if (p !== lastP) setProg((lastP = p));
        }
      } else {
        lastF = "";
        lastS = -1;
        lastC = -1;
      }
      scaleRef.current += (target - scaleRef.current) * 0.08;
      const s = scaleRef.current;
      haloRef.current?.style.setProperty("--s", (0.55 + s * 0.5).toFixed(3));

      if (visible) {
        ctx.clearRect(0, 0, W, H);
        const cx = W / 2, cy = H / 2;
        const R = Math.min(W, H) * 0.36 * s;
        const warm = (s - 0.55) / 0.45; // 0 exhalado, 1 inhalado
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(R * 1.9, Math.min(W, H) * 0.5));
        g.addColorStop(0, `rgba(255,${214 + warm * 26},${170 + warm * 40},${0.6 + warm * 0.35})`);
        g.addColorStop(0.22, `rgba(${237},${150 + warm * 30},${100},${0.35 + warm * 0.25})`);
        g.addColorStop(0.5, `rgba(${185 + warm * 30},${100 + warm * 20},${130},.16)`);
        g.addColorStop(1, "rgba(74,61,107,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
        ctx.globalCompositeOperation = "lighter";
        for (const p of ps) {
          p.a += p.w * (1.4 - warm);
          const wob = 1 + Math.sin(now / 900 + p.ph) * 0.04;
          const rr = p.r * R * wob;
          const x = cx + Math.cos(p.a) * rr;
          const y = cy + Math.sin(p.a) * rr;
          const edge = p.r;
          const alpha = (0.35 + edge * 0.6) * (0.6 + 0.4 * Math.sin(now / 600 + p.ph));
          const col = p.z < 0.5 ? `255,${190 + warm * 40},${140 + warm * 50}` : `${180 + warm * 57},${150 + warm * 16},${230 - warm * 138}`;
          ctx.fillStyle = `rgba(${col},${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, p.sz * (0.8 + warm * 0.5), 0, 6.283);
          ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [stop]);

  const C = 2 * Math.PI * 48;

  return (
    <section className={`respira is-${estado}`} id="respira">
      <div className="grain" aria-hidden="true" />
      <div className="respira-in">
        <div className="respira-copy" data-reveal>
          <span className="eyebrow">Un regalo antes de escribir</span>
          <h2 className="h2">
            Respirá <em>con la llama.</em>
          </h2>
          <p>
            Inhalá mientras la luz crece, sostené un instante y soltá cuando se apaga. No hace falta hacerlo perfecto.
            Solo estar.
          </p>
        </div>

        <div className="orbe">
          <canvas ref={canvasRef} className="orbe-canvas" aria-hidden="true" />
          <span className="orbe-halo" ref={haloRef} aria-hidden="true" />
          <svg className="orbe-ring" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="48" className="ring-bg" />
            <circle
              cx="50"
              cy="50"
              r="48"
              className="ring-fg"
              style={{ strokeDasharray: C, strokeDashoffset: C * (1 - prog) }}
            />
          </svg>
          <div className="orbe-center" aria-live="polite">
            {estado === "run" ? (
              <>
                <span className="orbe-fase">{fase}</span>
                <span className="orbe-seg">{seg}</span>
              </>
            ) : estado === "done" ? (
              <span className="orbe-fase sm">Gracias por darte este momento.</span>
            ) : (
              <span className="orbe-fase sm">Cuando quieras</span>
            )}
          </div>
        </div>

        <div className="respira-ctrl" data-reveal>
          {estado !== "run" ? (
            <>
              <div className="seg" role="radiogroup" aria-label="Duración">
                {DURACIONES.map((d, i) => (
                  <button key={d.label} type="button" role="radio" aria-checked={dur === i} onClick={() => setDur(i)}>
                    {d.label}
                  </button>
                ))}
              </div>
              <button type="button" className="btn btn-luz" onClick={start}>
                {estado === "done" ? "Respirar otra vez" : "Empezar"}
              </button>
            </>
          ) : (
            <>
              <span className="respira-count">
                Respiración {ciclo} de {DURACIONES[dur].ciclos}
              </span>
              <button type="button" className="btn btn-linea" onClick={() => stop(false)}>
                Pausar
              </button>
            </>
          )}
        </div>
        {estado === "done" && (
          <div className="respira-done">
            <p>Esto que sentiste es apenas el comienzo de una sesión.</p>
            <WaButton text="Hola May, recién respiré con la llama en tu web y me gustaría una sesión." variant="llama">
              Quiero más de esto
            </WaButton>
          </div>
        )}
      </div>
    </section>
  );
}
