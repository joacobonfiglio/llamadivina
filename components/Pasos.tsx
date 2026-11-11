"use client";
import { useEffect, useRef } from "react";

const PASOS = [
  { t: "Me escribís", d: "Por WhatsApp, con lo que tengas ganas de contar. Aunque sea solo un “hola”." },
  { t: "Coordinamos", d: "Vemos qué práctica te llama, el día, el horario y los detalles." },
  { t: "Te regalás una hora", d: "Llegás, respirás, y el resto del encuentro lo vamos sintiendo." },
];

export default function Pasos() {
  const ref = useRef<HTMLOListElement>(null);
  useEffect(() => {
    const el = ref.current!;
    let raf = 0;
    const up = () => {
      raf = 0;
      const b = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.8 - b.top) / (b.height + vh * 0.2)));
      el.style.setProperty("--p", p.toFixed(3));
      el.querySelectorAll<HTMLElement>(".paso").forEach((s, i) => s.classList.toggle("on", p > (i + 0.2) / PASOS.length));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(up);
    };
    up();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="pasos">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">Cómo empezamos</span>
          <h2 className="h2">
            Tu primer encuentro <em>empieza con una charla.</em>
          </h2>
        </div>
        <ol className="camino" ref={ref}>
          <span className="camino-linea" aria-hidden="true" />
          {PASOS.map((p, i) => (
            <li key={p.t} className="paso">
              <span className="paso-dot" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
