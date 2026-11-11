import { FAQ, SESIONES } from "@/lib/site";
import { WaButton } from "./ui";

export function Sesiones() {
  return (
    <section className="seccion" id="sesiones">
      <div className="wrap">
        <div className="cabecera">
          <h2>Sesiones</h2>
          <p>Todas son individuales y presenciales, en Mar del Plata. Si no sabés cuál elegir, lo charlamos antes.</p>
        </div>
        <div className="sesiones">
          {SESIONES.map((s) => (
            <article className={`sesion s-${s.id}`} key={s.id}>
              <p className="sesion-dur">{s.duracion}</p>
              <h3>{s.nombre}</h3>
              <p>{s.texto}</p>
              <ul>
                {s.para.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <WaButton text={s.mensaje} variant="borde" className="sesion-cta">
                Consultar
              </WaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const PASOS = [
  ["Llegás", "Charlamos unos minutos sobre cómo estás y qué te trae."],
  ["Te acomodás", "Ropa cómoda, un espacio tranquilo. No hace falta saber nada antes."],
  ["La sesión", "Reiki o lectura de registros, según lo que elegiste."],
  ["Cerramos", "Conversamos sobre lo que surgió y te llevás algo claro para tu día."],
];

export function ComoEs() {
  return (
    <section className="seccion seccion-alt" id="como-es">
      <div className="wrap">
        <div className="cabecera">
          <h2>Cómo es una sesión</h2>
          <p>Una hora, sin apuro. Así suele ser el encuentro.</p>
        </div>
        <ol className="pasos">
          {PASOS.map(([t, d], i) => (
            <li key={t}>
              <span className="paso-n">{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Preguntas() {
  return (
    <section className="seccion" id="preguntas">
      <div className="wrap faq-grid">
        <div className="cabecera">
          <h2>Preguntas frecuentes</h2>
          <p>¿Te queda alguna duda? Escribime y lo vemos.</p>
          <WaButton text="Hola May, tengo una pregunta antes de reservar." variant="borde">
            Hacer una pregunta
          </WaButton>
        </div>
        <div className="faq">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
