import { Isotipo } from "./ui";

export default function May() {
  return (
    <section className="may" id="may">
      <div className="wrap may-grid">
        <figure className="may-arco" data-reveal>
          <div className="may-sky" aria-hidden="true">
            <span className="may-sun" />
            <span className="may-sea" />
          </div>
          {/* Reemplazar por la foto de May: /public/may.jpg con next/image */}
          <figcaption>
            <Isotipo className="may-iso" />
            <span>May Espelet</span>
          </figcaption>
        </figure>
        <div className="may-copy" data-reveal>
          <span className="eyebrow">Soy May</span>
          <h2 className="h2">
            Qué lindo <em>encontrarnos.</em>
          </h2>
          <blockquote>
            “Acompañar es para mí una vocación: sostener un espacio donde cada persona pueda llegar como está.”
          </blockquote>
          <p>
            Acompaño con Reiki y Registros Akáshicos a personas que quieren hacer una pausa y escucharse con más
            claridad. En cada encuentro respeto tu sensibilidad y tus tiempos. No vengo a decirte quién sos: vengo a
            hacerte lugar para que lo encuentres.
          </p>
          <p className="firma">Con amor, May</p>
          <ul className="valores">
            <li>
              <b>Un momento para vos</b>
              <span>Una hora sin apuro, solo tuya.</span>
            </li>
            <li>
              <b>Escucha sin juicios</b>
              <span>Llegás como estés. Todo tiene lugar.</span>
            </li>
            <li>
              <b>Conexión con tu interior</b>
              <span>La respuesta vive en vos; yo acompaño.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
