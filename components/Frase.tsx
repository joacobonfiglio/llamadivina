"use client";
import { useState } from "react";
import { FRASES, wa } from "@/lib/site";
import { Isotipo, WaIcon } from "./ui";

export default function Frase() {
  const [idx, setIdx] = useState<number | null>(null);
  const [flip, setFlip] = useState(false);
  const [n, setN] = useState(0);

  const sacar = () => {
    if (flip) {
      setFlip(false);
      setTimeout(() => {
        setIdx((i) => {
          let k = Math.floor(Math.random() * FRASES.length);
          if (k === i) k = (k + 1) % FRASES.length;
          return k;
        });
        setN((x) => x + 1);
        setFlip(true);
      }, 520);
    } else {
      setIdx(Math.floor(Math.random() * FRASES.length));
      setN((x) => x + 1);
      setFlip(true);
    }
  };

  const texto = idx === null ? "" : FRASES[idx].replace(/<[^>]+>/g, "");

  return (
    <section className="frase" id="frase">
      <div className="grain" aria-hidden="true" />
      <div className="wrap frase-in">
        <div>
          <span className="eyebrow">Un mensaje de la llama</span>
          <h2 className="h2">
            Una frase <em>para hoy.</em>
          </h2>
          <p className="sec-lead">Respirá, pensá en algo que te esté pasando y tocá el mazo.</p>
        </div>

        <div className="mazo">
          <span className="carta-fondo f1" aria-hidden="true" />
          <span className="carta-fondo f2" aria-hidden="true" />
          <button type="button" className={`carta ${flip ? "is-flip" : ""}`} onClick={sacar} aria-label={flip ? "Sacar otra frase" : "Dar vuelta la carta"}>
            <span className="carta-cara dorso" aria-hidden={flip}>
              <span className="dorso-marco" />
              <Isotipo className="dorso-iso" />
              <span className="dorso-txt">Tocá para recibir tu frase</span>
            </span>
            <span className="carta-cara frente" aria-hidden={!flip} aria-live="polite">
              <span className="frente-n">Tu frase · {String(n).padStart(2, "0")}</span>
              {idx !== null && <span className="frente-txt" dangerouslySetInnerHTML={{ __html: FRASES[idx] }} />}
              <span className="frente-firma">Llama Divina</span>
            </span>
          </button>
        </div>

        <div className="frase-ctrl">
          <button type="button" className="btn btn-linea" onClick={sacar}>
            {flip ? "Sacar otra frase" : "Dar vuelta la carta"}
          </button>
          {flip && (
            <a
              className="btn btn-llama"
              href={wa(`Hola May, hoy me salió esta frase en tu web: "${texto}" y me resonó. Me gustaría charlar.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WaIcon />
              <span>Esta frase me resonó</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
