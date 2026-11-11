"use client";
import { useEffect, useRef, useState } from "react";
import { WaButton } from "./ui";

const VELAS = [
  { n: "Primer encuentro", d: "Te encontrás con lo que hay.", h: 120 },
  { n: "Segundo encuentro", d: "Lo que se movió se acomoda.", h: 170 },
  { n: "Tercer encuentro", d: "Te llevás tu propia llama.", h: 145 },
];

export default function Encuentros() {
  const [lit, setLit] = useState([false, false, false]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([en]) => {
        if (en.isIntersecting) {
          VELAS.forEach((_, i) =>
            setTimeout(() => setLit((l) => l.map((v, j) => (j === i ? true : v))), 400 + i * 650)
          );
          io.disconnect();
        }
      },
      { threshold: 0.45 }
    );
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);

  const all = lit.every(Boolean);

  return (
    <section className="encuentros">
      <div className="wrap enc-grid">
        <div className="enc-copy" data-reveal>
          <span className="eyebrow">Pack de tres sesiones</span>
          <h2 className="h2">
            Tres encuentros <em>para vos.</em>
          </h2>
          <p className="sec-lead">
            A veces una hora abre algo que pide continuidad. Tres sesiones de una hora, de Reiki, de Registros o
            combinadas, para darle tiempo a lo que se mueve.
          </p>
          <WaButton text="Hola May, me interesa el pack de tres encuentros. ¿Me contás opciones y precios?" variant="tinta">
            Dar continuidad a mi espacio
          </WaButton>
          <p className="enc-note">Precios y opciones por WhatsApp.</p>
        </div>
        <div className={`velas ${all ? "all" : ""}`} ref={ref}>
          {VELAS.map((v, i) => (
            <button
              key={v.n}
              type="button"
              className={`vela ${lit[i] ? "on" : ""}`}
              aria-pressed={lit[i]}
              aria-label={`${v.n}: ${lit[i] ? "encendida" : "apagada"}`}
              onClick={() => setLit((l) => l.map((x, j) => (j === i ? !x : x)))}
            >
              <span className="vela-glow" aria-hidden="true" />
              <svg className="vela-fuego" viewBox="0 0 40 70" aria-hidden="true">
                <defs>
                  <radialGradient id={`vf${i}`} cx="50%" cy="72%" r="60%">
                    <stop offset="0" stopColor="#FFF6EA" />
                    <stop offset=".35" stopColor="#FFD79A" />
                    <stop offset=".7" stopColor="#EDA65C" />
                    <stop offset="1" stopColor="#D97F68" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path d="M20 2C20 2 6 30 6 44a14 14 0 0 0 28 0C34 30 20 2 20 2Z" fill={`url(#vf${i})`} />
                <path d="M20 34s-5 6-5 11a5 5 0 0 0 10 0c0-5-5-11-5-11Z" fill="#4A3D6B" opacity=".45" />
              </svg>
              <span className="vela-mecha" aria-hidden="true" />
              <span className="vela-cuerpo" style={{ height: v.h }} aria-hidden="true" />
              <span className="vela-n">{v.n}</span>
              <span className="vela-d">{v.d}</span>
            </button>
          ))}
          <p className="velas-hint">Tocá una vela para apagarla o encenderla</p>
        </div>
      </div>
    </section>
  );
}
