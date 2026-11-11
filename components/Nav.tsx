"use client";
import { useEffect, useState } from "react";
import { Isotipo, WaIcon } from "./ui";
import { wa } from "@/lib/site";

const LINKS = [
  { href: "#llamado", label: "¿Qué te llama?" },
  { href: "#practicas", label: "Sesiones" },
  { href: "#respira", label: "Respirá" },
  { href: "#may", label: "Soy May" },
  { href: "#preguntas", label: "Preguntas" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header className={`nav ${solid ? "is-solid" : ""} ${open ? "is-open" : ""}`}>
        <div className="nav-in">
          <a className="brand" href="#inicio" aria-label="Llama Divina, inicio" onClick={() => setOpen(false)}>
            <Isotipo className="brand-iso" />
            <span>
              Llama <i>Divina</i>
            </span>
          </a>
          <nav aria-label="Principal" className="nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a
            className="btn btn-luz btn-sm nav-cta"
            href={wa("Hola May, vi tu web y me gustaría regalarme un momento.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon />
            <span>Reservar</span>
          </a>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div id="menu" className={`sheet ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Menú">
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ transitionDelay: `${80 + i * 50}ms` }} tabIndex={open ? 0 : -1}>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="sheet-foot">Reiki · Registros Akáshicos · Mar del Plata</p>
      </div>
    </>
  );
}
