import Aura from "./Aura";
import { WaButton } from "./ui";

const PRACTICAS = [
  {
    id: "reiki",
    num: "Reiki",
    titulo: (
      <>
        La energía, <em>en calma.</em>
      </>
    ),
    bajada:
      "Una práctica centrada en la energía y la presencia. Para cuando el cuerpo pide pausa y la cabeza no para.",
    para: ["Días de cansancio, ruido o tensión acumulada", "Momentos en que necesitás volver al cuerpo", "Quien nunca hizo nada “espiritual”"],
    como: [
      ["Llegás", "Charlamos unos minutos sobre cómo estás."],
      ["Te recostás", "Con ropa cómoda, en silencio o con música suave."],
      ["Cerramos", "Un momento para registrar lo que sentiste."],
    ],
    cta: "Quiero un momento de calma",
    msg: "Hola May, me gustaría reservar una sesión de Reiki.",
    variant: "tinta" as const,
  },
  {
    id: "registros",
    num: "Registros Akáshicos",
    titulo: (
      <>
        Tus preguntas, <em>tu camino.</em>
      </>
    ),
    bajada:
      "Una guía espiritual por canalización, para momentos de búsqueda. Traés tus preguntas y abrimos juntos tus registros.",
    para: ["Una decisión que te cuesta tomar", "Preguntas que vuelven una y otra vez", "Un cambio de etapa que querés entender"],
    como: [
      ["Antes", "Te ayudo a formular tus preguntas."],
      ["La lectura", "Abro tus registros y te comparto lo que llega."],
      ["Después", "Te llevás las respuestas para volver a ellas."],
    ],
    cta: "Quiero explorar mi camino",
    msg: "Hola May, me gustaría hacer una lectura de Registros Akáshicos.",
    variant: "llama" as const,
  },
];

export default function Practicas() {
  return (
    <section className="practicas" id="practicas">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">Sesiones individuales · 1 hora</span>
          <h2 className="h2">
            Dos caminos para <em>el mismo encuentro.</em>
          </h2>
        </div>
        {PRACTICAS.map((p, i) => (
          <article key={p.id} className={`capitulo c-${p.id} ${i % 2 ? "rev" : ""}`}>
            <div className="cap-visual" data-reveal>
              <Aura mode={p.id as "reiki" | "registros"} />
              <span className="cap-name">{p.num}</span>
            </div>
            <div className="cap-copy" data-reveal>
              <h3 className="h3">{p.titulo}</h3>
              <p className="cap-bajada">{p.bajada}</p>
              <div className="cap-cols">
                <div>
                  <h4>Para cuando…</h4>
                  <ul className="sparks">
                    {p.para.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Cómo es</h4>
                  <ol className="como">
                    {p.como.map(([t, d]) => (
                      <li key={t}>
                        <b>{t}</b>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <WaButton text={p.msg} variant={p.variant}>
                {p.cta}
              </WaButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
