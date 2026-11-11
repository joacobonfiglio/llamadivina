"use client";
import { useEffect, useState } from "react";
import { Isotipo, WaButton } from "./ui";

const LINKS = [
  ["#sesiones", "Sesiones"],
  ["#como-es", "Cómo es"],
  ["#may", "Sobre May"],
  ["#preguntas", "Preguntas"],
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`nav ${solid || open ? "is-solid" : ""}`}>
      <div className="wrap nav-in">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <Isotipo className="brand-iso" />
          Llama Divina
        </a>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Secciones">
          {LINKS.map(([h, l]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </nav>
        <WaButton text="Hola May, quiero reservar una sesión." variant="claro" className="btn-sm nav-cta">
          Reservar
        </WaButton>
        <button
          type="button"
          className="burger"
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
