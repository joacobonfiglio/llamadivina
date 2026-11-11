import { FAQ } from "@/lib/site";
import { WaButton } from "./ui";

export default function Faq() {
  return (
    <section className="faq" id="preguntas">
      <div className="wrap faq-grid">
        <div className="faq-side" data-reveal>
          <span className="eyebrow">Preguntas</span>
          <h2 className="h2">
            Lo que <em>suelen preguntarme.</em>
          </h2>
          <p className="sec-lead">Si te queda alguna duda, escribime. Me encanta conversar antes de empezar.</p>
          <WaButton text="Hola May, tengo una duda sobre las sesiones." variant="tinta">
            Preguntale a May
          </WaButton>
        </div>
        <div className="faq-list" data-reveal>
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
