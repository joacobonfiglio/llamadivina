"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import EnergyField from "./EnergyField";
import { WaButton } from "./ui";
import { EASE, Lines } from "./motion";

const CORE: [number, number] = [0.84, 0.22];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section className="hero" id="inicio" ref={ref}>
      <EnergyField core={CORE} />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <motion.div className="hero-in" style={{ y, opacity }}>
        <motion.p
          className="kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        >
          <span className="dot" aria-hidden="true" /> Reiki · Registros Akáshicos · Mar del Plata
        </motion.p>

        <Lines
          as="h1"
          className="hero-title"
          inView={false}
          delay={0.2}
          lines={[
            "Una hora",
            <>
              para <em>volver</em>
            </>,
            <em key="v">a vos.</em>,
          ]}
        />

        <motion.div
          className="hero-foot"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease: EASE }}
        >
          <p className="hero-lead">
            Sesiones individuales con <b>May Espelet</b> para bajar el ruido, escucharte y volver a casa con más
            calma. No necesitás saber nada antes.
          </p>
          <div className="hero-ctas">
            <WaButton text="Hola May, vi tu web y quiero reservar una sesión." variant="luz" className="btn-lg">
              Reservá tu sesión
            </WaButton>
            <a className="btn btn-ghost btn-lg" href="#respira">
              <span className="ghost-orb" aria-hidden="true" />
              <span>Probá un minuto de calma</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <a className="hero-scroll" href="#experiencia" aria-label="Ver cómo es una sesión">
        <span>Viví la sesión</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
