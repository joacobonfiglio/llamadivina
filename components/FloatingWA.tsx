"use client";
import { useEffect, useState } from "react";
import { WaIcon } from "./ui";
import { wa } from "@/lib/site";

/** Botón de WhatsApp fijo en el teléfono: aparece después del hero y se esconde en el cierre. */
export default function FloatingWA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const hero = document.getElementById("inicio");
      const cierre = document.getElementById("cierre");
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 80 : false;
      const atEnd = cierre ? cierre.getBoundingClientRect().top < window.innerHeight * 0.85 : false;
      const r = document.getElementById("respira")?.getBoundingClientRect();
      const inRespira = r ? r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5 : false;
      setShow(pastHero && !atEnd && !inRespira);
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
    <a
      className={`float-wa ${show ? "is-on" : ""}`}
      href={wa("Hola May, vi tu web y me gustaría conversar.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <WaIcon />
      <span>Escribile a May</span>
    </a>
  );
}
