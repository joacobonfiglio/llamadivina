import EnergyField from "./EnergyField";
import { Isotipo, WaButton } from "./ui";
import { Lines, Reveal } from "./motion";
import { SITE } from "@/lib/site";

const CORE: [number, number] = [0.5, 0.08];

export default function Cierre() {
  return (
    <>
      <section className="cierre" id="cierre">
        <EnergyField core={CORE} lift={1.25} />
        <div className="cierre-scrim" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <div className="wrap cierre-in">
          <Lines
            className="cierre-title"
            lines={[
              "Tu próxima hora",
              <>
                puede ser <em>para vos.</em>
              </>,
            ]}
          />
          <Reveal delay={0.3}>
            <p className="cierre-p">Escribime y empezamos con una charla, sin compromiso.</p>
            <div className="cierre-ctas">
              <WaButton text="Hola May, quiero dar el primer paso. ¿Charlamos?" variant="luz" className="btn-xl">
                Reservá por WhatsApp
              </WaButton>
              <span className="cierre-tel">{SITE.whatsappLabel}</span>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap footer-in">
          <div className="footer-brand">
            <Isotipo className="brand-iso" />
            <span>
              Llama <em>Divina</em>
            </span>
          </div>
          <p className="footer-tag">Un encuentro con vos · {SITE.city}</p>
          <nav className="footer-links" aria-label="Pie">
            <a href="#experiencia">La experiencia</a>
            <a href="#sesiones">Sesiones</a>
            <a href="#respira">Respirá</a>
            <a href="#may">Soy May</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <p className="footer-legal">
            © {new Date().getFullYear()} Llama Divina · {SITE.owner}. Estas prácticas acompañan tu bienestar y no
            reemplazan la atención médica ni psicológica.
          </p>
        </div>
      </footer>
    </>
  );
}
