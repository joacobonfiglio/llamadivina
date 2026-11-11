"use client";
import { useState } from "react";
import { FAQ } from "@/lib/site";
import { WaButton } from "./ui";
import { Lines, Reveal } from "./motion";

const PASOS = [
  ["Me escribís", "Por WhatsApp, con lo que tengas ganas de contar. Aunque sea solo un “hola”."],
  ["Coordinamos", "Vemos qué práctica te llama, el día, el horario y los detalles."],
  ["Te regalás una hora", "Llegás, respirás, y el resto del encuentro lo vamos sintiendo."],
];

export default function Empezar() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="empezar" id="preguntas">
      <div className="wrap">
        <div className="pasos-head">
          <Reveal>
            <span className="eyebrow">Cómo empezamos</span>
          </Reveal>
          <Lines
            className="h2"
            lines={[
              "Tres pasos y",
              <>
                <em>estás acá.</em>
              </>,
            ]}
          />
        </div>
        <div className="pasos">
          {PASOS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1} className="paso">
              <span className="paso-n">{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>

        <div className="faq-grid">
          <Reveal className="faq-side">
            <h2 className="h3">
              Lo que <em>suelen preguntarme.</em>
            </h2>
            <p>¿Te queda otra duda? Escribime, me encanta conversar antes de empezar.</p>
            <WaButton text="Hola May, tengo una pregunta antes de reservar." variant="tinta">
              Preguntale a May
            </WaButton>
          </Reveal>
          <div className="faq">
            {FAQ.map((f, i) => {
              const on = open === i;
              return (
                <div className={`faq-item ${on ? "is-open" : ""}`} key={f.q}>
                  <h3>
                    <button type="button" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? null : i)}>
                      <span>{f.q}</span>
                      <span className="faq-plus" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="faq-a" id={`faq-${i}`} role="region" inert={!on}>
                    <div>
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
