"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.23, 1, 0.32, 1] as const;

/** Entrada suave al aparecer en pantalla (una sola vez). */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: reduce ? 0.4 : 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Título que sube línea por línea desde una máscara. */
export function Lines({
  lines,
  className,
  delay = 0,
  as = "h2",
  inView = true,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const Tag = as;
  const anim = inView
    ? { whileInView: "in", viewport: { once: true, margin: "0px 0px -10% 0px" } }
    : { animate: "in" };
  return (
    <Tag className={className}>
      <motion.span className="lines" initial="out" {...anim} transition={{ staggerChildren: 0.11, delayChildren: delay }}>
        {lines.map((l, i) => (
          <span className="line-mask" key={i}>
            <motion.span
              className="line"
              variants={{
                out: { y: reduce ? "0%" : "105%", opacity: reduce ? 0 : 1 },
                in: { y: "0%", opacity: 1 },
              }}
              transition={{ duration: reduce ? 0.4 : 1.1, ease: EASE }}
            >
              {l}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
