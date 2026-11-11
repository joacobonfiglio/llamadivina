"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LLAMADOS, SESIONES, type Sesion } from "@/lib/site";
import Aura from "./Aura";
import { WaButton } from "./ui";
import { EASE, Lines, Reveal } from "./motion";

const TONO_A_SESION: Record<string, Sesion["id"] | "charla"> = {
  reiki: "reiki",
  registros: "registros",
  tres: "tres",
  charla: "charla",
};

function Velas() {
  return (
    <div className="velas" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span className="vela" key={i} style={{ animationDelay: `${i * -0.7}s` }}>
          <span className="vela-llama" />
        </span>
      ))}
    </div>
  );
}

export default function Sesiones() {
  const [sel, setSel] = useState<string | null>(null);
  const llamado = LLAMADOS.find((l) => l.id === sel);
  const destino = llamado ? TONO_A_SESION[llamado.tono] : null;

  return (
    <section className="sesiones" id="sesiones">
      <div className="wrap">
        <div className="ses-head">
          <Reveal>
            <span className="eyebrow">Sesiones individuales · Mar del Plata</span>
          </Reveal>
          <Lines
            className="h2"
            lines={[
              "Elegí cómo",
              <>
                querés <em>empezar.</em>
              </>,
            ]}
          />
        </div>

        <Reveal className="chooser" delay={0.1}>
          <p className="chooser-q">¿Qué te llama hoy?</p>
          <div className="chips" role="radiogroup" aria-label="¿Qué te llama hoy?">
            {LLAMADOS.map((l) => {
              const on = sel === l.id;
              return (
                <button
                  key={l.id}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  className={`chip ${on ? "is-on" : ""}`}
                  onClick={() => setSel(on ? null : l.id)}
                >
                  {on && <motion.span layoutId="chip-bg" className="chip-bg" transition={{ type: "spring", duration: 0.45, bounce: 0.15 }} />}
                  <span className="chip-txt">{l.pregunta}</span>
                </button>
              );
            })}
          </div>
          <div className="chooser-a" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              {llamado && (
                <motion.p
                  key={llamado.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  Te puede acompañar: <b>{llamado.practica}</b>. {llamado.texto}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <div className={`cards ${destino ? "has-pick" : ""}`}>
          {SESIONES.map((s, i) => {
            const pick = destino === s.id;
            return (
              <Reveal key={s.id} delay={0.08 * i} className={`card-wrap ${pick ? "is-pick" : ""}`}>
                <article className={`card c-${s.id}`}>
                  {pick && <span className="card-badge">Para vos hoy</span>}
                  <div className="card-vis">
                    {s.id === "tres" ? <Velas /> : <Aura mode={s.id} />}
                    <span className="card-nombre">{s.nombre}</span>
                  </div>
                  <div className="card-body">
                    <h3 className="card-t">
                      {s.titulo} <em>{s.em}</em>
                    </h3>
                    <p className="card-p">{s.bajada}</p>
                    <ul className="card-ideal" aria-label="Ideal si tenés">
                      {s.ideal.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                    <ul className="card-meta">
                      {s.meta.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                    <WaButton text={s.mensaje} variant={s.id === "registros" ? "llama" : "tinta"} className="card-cta">
                      {s.cta}
                    </WaButton>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className={`charla ${destino === "charla" ? "is-pick" : ""}`}>
          <div>
            <p className="charla-t">
              ¿No sabés cuál? <em>Está perfecto no saber.</em>
            </p>
            <p className="charla-p">Escribime, contame cómo estás y elegimos juntos. Sin compromiso.</p>
          </div>
          <WaButton text="Hola May, no sé bien qué necesito, pero siento que algo me llama. ¿Charlamos?" variant="linea">
            Empecemos por una charla
          </WaButton>
        </Reveal>
      </div>
    </section>
  );
}
