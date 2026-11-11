"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { WaButton } from "./ui";

const MOMENTOS = [
  {
    min: "Minuto 0",
    t: "Llegás",
    em: "como estés.",
    txt: "Te recibo y charlamos unos minutos sobre cómo venís. No hace falta traer nada preparado: solo las ganas de darte este tiempo.",
    v: "arco",
  },
  {
    min: "Minuto 10",
    t: "Soltás",
    em: "el ruido.",
    txt: "Te recostás, cerrás los ojos y la respiración empieza a bajar el ritmo. Lo de afuera se queda afuera.",
    v: "ondas",
  },
  {
    min: "Minuto 20",
    t: "Algo",
    em: "se abre.",
    txt: "La energía circula o se abren tus registros. Cada encuentro es distinto: aparece lo que necesitás mirar hoy.",
    v: "rayos",
  },
  {
    min: "Minuto 50",
    t: "Volvés",
    em: "a vos.",
    txt: "Cerramos con calma, conversamos sobre lo que sentiste y te llevás algo claro para tu día a día.",
    v: "sol",
  },
] as const;

function Visual({ v }: { v: (typeof MOMENTOS)[number]["v"] }) {
  if (v === "arco")
    return (
      <div className="vis vis-arco" aria-hidden="true">
        <span className="arco-luz" />
        <span className="arco-puerta">
          <span className="arco-llama" />
        </span>
        <span className="arco-piso" />
      </div>
    );
  if (v === "ondas")
    return (
      <div className="vis vis-ondas" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ animationDelay: `${i * -1.6}s` }} />
        ))}
        <b />
      </div>
    );
  if (v === "rayos")
    return (
      <div className="vis vis-rayos" aria-hidden="true">
        <span className="rayos-a" />
        <span className="rayos-b" />
        <b />
      </div>
    );
  return (
    <div className="vis vis-sol" aria-hidden="true">
      <span className="sol-cielo" />
      <span className="sol-disco" />
      <span className="sol-mar">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <i key={i} />
        ))}
      </span>
    </div>
  );
}

export default function Viaje() {
  const ref = useRef<HTMLElement>(null);
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    const on = () => setWide(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const n = MOMENTOS.length;
  const x = useTransform(scrollYProgress, [0.04, 0.96], ["0vw", `-${(n - 1) * 100}vw`]);
  const bar = useTransform(scrollYProgress, [0.04, 0.96], [0, 1]);

  return (
    <section className={`viaje ${wide ? "is-wide" : ""}`} id="experiencia" ref={ref} style={{ ["--n" as string]: n }}>
      <div className="viaje-sticky">
        <div className="viaje-head">
          <span className="eyebrow">La experiencia</span>
          <p className="viaje-h">Así se vive una hora con May</p>
          {wide && (
            <div className="viaje-bar" aria-hidden="true">
              <motion.span style={{ scaleX: bar }} />
            </div>
          )}
        </div>
        <motion.ol className="viaje-track" style={wide ? { x } : undefined}>
          {MOMENTOS.map((m, i) => (
            <li className={`momento m-${i + 1}`} key={m.t}>
              <div className="momento-in">
                <Visual v={m.v} />
                <div className="momento-copy">
                  <span className="momento-min">
                    <b>0{i + 1}</b> {m.min}
                  </span>
                  <h3 className="momento-t">
                    {m.t} <em>{m.em}</em>
                  </h3>
                  <p>{m.txt}</p>
                  {i === n - 1 && (
                    <WaButton text="Hola May, quiero vivir una sesión. ¿Cuándo tenés lugar?" variant="luz">
                      Quiero vivir esta hora
                    </WaButton>
                  )}
                </div>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
