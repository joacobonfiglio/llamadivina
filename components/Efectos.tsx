"use client";
import { useEffect } from "react";

/**
 * Efectos de la página (sin librerías, solo transform/opacity):
 * - [data-reveal] / [data-pop]: aparecen al entrar en pantalla.
 * - [data-parallax="k"]: se desplazan a otra velocidad que el scroll.
 * - [data-palabras]: las palabras se iluminan a medida que se lee.
 * - [data-desliza]: se desliza horizontalmente mientras entra.
 * Con "reducir movimiento" todo queda visible y quieto.
 */
export default function Efectos() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal], [data-pop]");

    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((e) => e.classList.add("is-in"));
      document.querySelectorAll(".pal").forEach((e) => e.classList.add("on"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-in");
            io.unobserve(en.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" }
    );
    reveals.forEach((e) => io.observe(e));

    const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]")).map((el) => ({
      el,
      k: parseFloat(el.dataset.parallax || "0"),
    }));
    const textos = Array.from(document.querySelectorAll<HTMLElement>("[data-palabras]")).map((el) => ({
      el,
      pals: Array.from(el.querySelectorAll<HTMLElement>(".pal")),
      lit: -1,
    }));
    const deslizan = Array.from(document.querySelectorAll<HTMLElement>("[data-desliza]"));

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (const { el, k } of parallax) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) continue;
        const p = r.top + r.height / 2 - vh / 2;
        el.style.transform = `translate3d(0, ${(-p * k).toFixed(1)}px, 0)`;
      }
      for (const t of textos) {
        const r = t.el.getBoundingClientRect();
        const prog = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (r.height + vh * 0.3)));
        const lit = Math.round(prog * t.pals.length * 1.2);
        if (lit !== t.lit) {
          t.pals.forEach((p, i) => p.classList.toggle("on", i < lit));
          t.lit = lit;
        }
      }
      for (const el of deslizan) {
        const r = el.getBoundingClientRect();
        const prog = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.8)));
        el.style.transform = `translate3d(${((1 - prog) * 14).toFixed(2)}%, 0, 0)`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return null;
}
