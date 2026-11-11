"use client";
import { useEffect, useState } from "react";
import { Isotipo, WaButton } from "./ui";

const LINKS = [
  ["#experiencia", "La experiencia"],
  ["#sesiones", "Sesiones"],
  ["#respira", "Respirá"],
  ["#may", "Soy May"],
  ["#preguntas", "Preguntas"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => {
      const s = window.scrollY > 40;
      setScrolled((p) => (p === s ? p : s));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="nav-in">
          <a href="#inicio" className="brand" aria-label="Llama Divina, inicio" onClick={() => setOpen(false)}>
            <Isotipo className="brand-iso" />
            <span>
              Llama <em>Divina</em>
            </span>
          </a>
          <nav className="nav-links" aria-label="Secciones">
            {LINKS.map(([h, l]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <WaButton text="Hola May, quiero reservar una sesión." variant="luz" className="btn-sm">
              Reservar
            </WaButton>
            <button
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`menu ${open ? "is-open" : ""}`} id="menu" inert={!open}>
        <nav aria-label="Menú">
          {LINKS.map(([h, l], i) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}>
              <span className="menu-n">0{i + 1}</span>
              {l}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
