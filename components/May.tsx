"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Isotipo, WaButton } from "./ui";
import { Reveal } from "./motion";

const CITA =
  "Acompañar es para mí una vocación: sostener un espacio donde cada persona pueda llegar como está, y encontrarse.";

function Palabra({ w, i, n, p }: { w: string; i: number; n: number; p: MotionValue<number> }) {
  const opacity = useTransform(p, [i / n, (i + 1) / n], [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="palabra">
      {w}{" "}
    </motion.span>
  );
}

export default function May() {
  const ref = useRef<HTMLQuoteElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = CITA.split(" ");

  return (
    <section className="may" id="may">
      <div className="wrap may-grid">
        <div className="may-pic">
          <figure className="may-arco">
            <div className="may-sky" aria-hidden="true">
              <span className="may-sun" />
              <span className="may-sea" />
            </div>
            {/* Para usar la foto de May: agregar /public/may.jpg y reemplazar .may-sky por <Image src="/may.jpg" fill alt="May Espelet" /> */}
            <figcaption>
              <Isotipo className="may-iso" />
              <span>May Espelet</span>
              <small>Reiki · Registros Akáshicos</small>
            </figcaption>
          </figure>
        </div>

        <div className="may-copy">
          <Reveal>
            <span className="eyebrow">Soy May</span>
          </Reveal>
          <blockquote className="may-cita" ref={ref}>
            “
            {words.map((w, i) => (
              <Palabra key={i} w={w} i={i} n={words.length} p={scrollYProgress} />
            ))}
            ”
          </blockquote>
          <Reveal>
            <p className="may-p">
              Acompaño con Reiki y Registros Akáshicos a personas que quieren hacer una pausa y escucharse con más
              claridad. Respeto tu sensibilidad y tus tiempos. No vengo a decirte quién sos: vengo a hacerte lugar para
              que lo encuentres.
            </p>
            <p className="firma">Con amor, May</p>
          </Reveal>
          <div className="valores">
            {[
              ["Una hora solo tuya", "Sin apuro, sin interrupciones."],
              ["Escucha sin juicios", "Llegás como estés. Todo tiene lugar."],
              ["La respuesta vive en vos", "Yo acompaño, vos encontrás."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="valor">
                  <b>{t}</b>
                  <span>{d}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <WaButton text="Hola May, leí sobre vos en tu web y me gustaría conocerte." variant="tinta">
              Escribile a May
            </WaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
