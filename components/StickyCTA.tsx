"use client";
import { useEffect, useState } from "react";
import { WaIcon } from "./ui";
import { wa } from "@/lib/site";

/** Acceso fijo a WhatsApp: aparece después del hero y se esconde en Respirá y en el cierre. */
export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const vh = window.innerHeight;
      const hero = document.getElementById("inicio")?.getBoundingClientRect();
      const cierre = document.getElementById("cierre")?.getBoundingClientRect();
      const r = document.getElementById("respira")?.getBoundingClientRect();
      const past = hero ? hero.bottom < vh * 0.3 : false;
      const end = cierre ? cierre.top < vh * 0.9 : false;
      const inR = r ? r.top < vh * 0.5 && r.bottom > vh * 0.5 : false;
      const s = past && !end && !inR;
      setShow((p) => (p === s ? p : s));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return (
    <div className={`sticky-cta ${show ? "is-on" : ""}`} aria-hidden={!show}>
      <span className="sticky-txt">
        <b>Una hora para vos</b>
        <span>Reiki · Registros · Mar del Plata</span>
      </span>
      <a href={wa("Hola May, vi tu web y me gustaría reservar una sesión.")} target="_blank" rel="noopener noreferrer" tabIndex={show ? 0 : -1} className="btn btn-llama">
        <WaIcon />
        <span>Reservar</span>
      </a>
    </div>
  );
}
