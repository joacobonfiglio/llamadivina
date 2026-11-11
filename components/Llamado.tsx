"use client";
import { useRef, useState } from "react";
import { LLAMADOS, type Llamado as L } from "@/lib/site";
import { WaButton, Isotipo } from "./ui";

function Glyph({ tono }: { tono: L["tono"] }) {
  if (tono === "reiki")
    return (
      <svg viewBox="0 0 200 200" className="glyph" aria-hidden="true">
        <circle cx="100" cy="92" r="64" className="g-halo" />
        <g className="g-rays">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="100" y1="22" x2="100" y2="38" transform={`rotate(${i * 30} 100 92)`} />
          ))}
        </g>
        <path className="g-line" d="M40 186c6-28 20-48 38-58 10-6 17-14 20-26l2-8 2 8c3 12 10 20 20 26 18 10 32 30 38 58" />
        <g transform="translate(86 66) scale(.47)">
          <Isotipo />
        </g>
      </svg>
    );
  if (tono === "registros")
    return (
      <svg viewBox="0 0 200 200" className="glyph" aria-hidden="true">
        <g className="g-threads">
          <path d="M100 128C92 90 70 60 46 30" />
          <path d="M100 128C100 90 100 56 100 18" />
          <path d="M100 128c8-38 30-68 54-98" />
          <path d="M100 128C80 100 52 84 22 74" />
          <path d="M100 128c20-28 48-44 78-54" />
        </g>
        <path className="g-book" d="M24 150c26-12 52-12 76 6 24-18 50-18 76-6v28c-26-12-52-12-76 6-24-18-50-18-76-6Z" />
        <circle cx="100" cy="128" r="5" className="g-spark" />
      </svg>
    );
  if (tono === "tres")
    return (
      <svg viewBox="0 0 200 200" className="glyph" aria-hidden="true">
        {[52, 100, 148].map((x, i) => (
          <g key={x} transform={`translate(${x - 14} ${i === 1 ? 44 : 64}) scale(.47)`}>
            <Isotipo />
          </g>
        ))}
        <g className="g-candles">
          <rect x="40" y="104" width="24" height="70" rx="6" />
          <rect x="88" y="84" width="24" height="90" rx="6" />
          <rect x="136" y="104" width="24" height="70" rx="6" />
        </g>
      </svg>
    );
  return (
    <svg viewBox="0 0 200 200" className="glyph" aria-hidden="true">
      <path className="g-line" d="M36 50h128a10 10 0 0 1 10 10v66a10 10 0 0 1-10 10H86l-30 24v-24H36a10 10 0 0 1-10-10V60a10 10 0 0 1 10-10Z" />
      {[74, 100, 126].map((x, i) => (
        <circle key={x} cx={x} cy="93" r="7" className="g-dot" style={{ animationDelay: `${i * 0.25}s` }} />
      ))}
    </svg>
  );
}

export default function Llamado() {
  const [sel, setSel] = useState(LLAMADOS[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  const pick = (id: string) => {
    setSel(id);
    // en el teléfono, acomodar la tarjeta abierta para que se vea completa sin buscarla
    if (window.matchMedia("(max-width: 900px)").matches) {
      setTimeout(() => {
        const el = refs.current[id];
        if (!el) return;
        const b = el.getBoundingClientRect();
        const top = 84;
        if (b.top < top || b.bottom > window.innerHeight - 16) {
          window.scrollTo({ top: window.scrollY + b.top - top, behavior: "smooth" });
        }
      }, 380);
    }
  };

  return (
    <section className="llamado" id="llamado">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">Para elegir sin saber</span>
          <h2 className="h2">
            ¿Qué te <em>llama</em> hoy?
          </h2>
          <p className="sec-lead">Tocá la puerta que más se parece a cómo estás. Te cuento por dónde podríamos empezar.</p>
        </div>

        <div className="puertas" data-reveal>
          {LLAMADOS.map((l) => {
            const open = l.id === sel;
            return (
              <article
                key={l.id}
                ref={(el) => {
                  refs.current[l.id] = el;
                }}
                className={`puerta t-${l.tono} ${open ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="puerta-head"
                  aria-expanded={open}
                  aria-controls={`p-${l.id}`}
                  onClick={() => pick(l.id)}
                >
                  <span className="puerta-q">{l.pregunta}</span>
                  <span className="puerta-c">{l.corto}</span>
                  <span className="puerta-plus" aria-hidden="true" />
                </button>
                <div className="puerta-body" id={`p-${l.id}`} role="region" inert={!open}>
                  <div className="puerta-inner">
                    <Glyph tono={l.tono} />
                    <div className="puerta-copy">
                      <span className="puerta-tag">Te puede acompañar · {l.practica}</span>
                      <h3>{l.titulo}</h3>
                      <p>{l.texto}</p>
                      <WaButton text={l.mensaje} variant="luz" className="puerta-cta">
                        {l.cta}
                      </WaButton>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
