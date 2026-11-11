"use client";
import { useEffect, useState } from "react";
import { Arrow, Logo, Wa } from "./ui";

const LINKS = [
  ["#sesiones", "Sesiones"],
  ["#soy-may", "Soy May"],
  ["#preguntas", "Preguntas"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", open);
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container header-in">
        <a href="#inicio" className="marca" onClick={() => setOpen(false)} aria-label="Llama Divina, inicio">
          <Logo className="marca-logo" />
          <span className="marca-txt">
            <span className="marca-nombre">Llama Divina</span>
            <span className="marca-tag">Un encuentro con vos</span>
          </span>
        </a>
        <nav className="nav" aria-label="Principal">
          {LINKS.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <Wa text="Hola May, quiero regalarme un momento. ¿Me contás cómo reservar?" className="btn btn-verde nav-cta">
            Regalarme un momento <Arrow />
          </Wa>
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
