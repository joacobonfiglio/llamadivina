"use client";
import { useEffect, useState } from "react";
import { Arrow, Llama, Wa } from "./ui";

const LINKS = [
  ["#sesiones", "Sesiones"],
  ["#soy-may", "Soy May"],
  ["#preguntas", "Preguntas"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("no-scroll", open);
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="header-in">
        <div className="header-izq">
          <a href="#inicio" className="marca" onClick={() => setOpen(false)}>
            <Llama className="marca-llama" />
            Llama Divina
          </a>
          <nav className="nav" aria-label="Principal">
            {LINKS.map(([h, l]) => (
              <a key={h} href={h} onClick={() => setOpen(false)}>
                {l}
              </a>
            ))}
          </nav>
        </div>
        <Wa text="Hola May, quiero reservar una sesión." className="btn nav-cta">
          Reservar <Arrow />
        </Wa>
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
