import { Isotipo, WaButton, WaIcon } from "./ui";
import { SITE, wa } from "@/lib/site";

export default function Cierre() {
  return (
    <>
      <section className="cierre" id="contacto">
        <div className="wrap cierre-in">
          <h2>¿Damos el primer paso?</h2>
          <p>Escribime por WhatsApp y coordinamos día y horario. Sin compromiso.</p>
          <WaButton text="Hola May, quiero reservar una sesión. ¿Qué días tenés?" variant="claro">
            Reservar por WhatsApp
          </WaButton>
          <p className="cierre-tel">{SITE.whatsappLabel}</p>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap footer-in">
          <span className="brand">
            <Isotipo className="brand-iso" />
            Llama Divina
          </span>
          <p>
            © {new Date().getFullYear()} {SITE.owner} · {SITE.city}. Estas prácticas acompañan tu bienestar y no
            reemplazan la atención médica ni psicológica.
          </p>
        </div>
      </footer>
      <a
        className="wa-flotante"
        href={wa("Hola May, vi tu web y me gustaría consultar.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
      >
        <WaIcon />
      </a>
    </>
  );
}
