import { FOTOS } from "@/lib/site";
import { Foto } from "./ui";

export default function May() {
  return (
    <section className="seccion seccion-alt" id="may">
      <div className="wrap may">
        <Foto src={FOTOS.may} alt="May Espelet" className="may-foto" />
        <div className="may-copy">
          <h2>Sobre May</h2>
          <p className="may-cita">
            “Acompañar es para mí una vocación: sostener un espacio donde cada persona pueda llegar como está.”
          </p>
          <p>
            Soy May Espelet. Acompaño con Reiki y Registros Akáshicos a personas que quieren hacer una pausa y
            escucharse con más claridad.
          </p>
          <p>
            En cada encuentro respeto tu sensibilidad y tus tiempos. No vengo a decirte quién sos: vengo a hacerte lugar
            para que lo encuentres.
          </p>
        </div>
      </div>
    </section>
  );
}
