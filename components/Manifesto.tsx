"use client";
import { useEffect, useRef } from "react";

const TEXTO =
  "No hace falta tener todas las respuestas. Podés empezar por *escucharte.* Lo espiritual también habita en lo *cotidiano:* en una pausa, en una respiración, en una hora para vos.";

export default function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const words = Array.from(el.querySelectorAll<HTMLSpanElement>(".w"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      words.forEach((w) => w.classList.add("on"));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const b = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - b.top) / (b.height + vh * 0.35)));
      const lit = Math.round(p * words.length * 1.05);
      words.forEach((w, i) => w.classList.toggle("on", i < lit));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  const tokens = TEXTO.split(" ");
  return (
    <section className="manifiesto">
      <div className="wrap">
        <span className="eyebrow">Llama Divina</span>
        <p className="manifiesto-txt" ref={ref}>
          {tokens.map((t, i) => {
            const em = t.startsWith("*");
            const clean = t.replace(/\*/g, "");
            return (
              <span key={i} className={`w ${em ? "em" : ""}`}>
                {clean}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
