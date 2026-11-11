import EnergyField from "./EnergyField";
import { Isotipo, WaButton } from "./ui";
import { SITE } from "@/lib/site";

const CORE: [number, number] = [0.5, 0.05];

export default function Cierre() {
  return (
    <>
      <section className="cierre" id="cierre">
        <EnergyField core={CORE} lift={1.2} />
        <div className="cierre-scrim" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <div className="wrap cierre-in">
          <Isotipo className="cierre-iso" />
          <h2 className="cierre-title">
            Este momento <em>puede ser para vos.</em>
          </h2>
          <p>Si algo de este espacio resuena con vos, escribime. Empezamos con una charla, sin compromiso.</p>
          <WaButton text="Hola May, quiero dar el primer paso. ¿Charlamos?" variant="luz" className="btn-lg">
            Demos el primer paso
          </WaButton>
          <p className="cierre-num">
            WhatsApp <span>{SITE.whatsappLabel}</span>
          </p>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <a className="brand" href="#inicio">
              <Isotipo className="brand-iso" />
              <span>
                Llama <i>Divina</i>
              </span>
            </a>
            <p className="footer-tag">Un encuentro con vos.</p>
          </div>
          <nav aria-label="Sesiones">
            <h4>Sesiones</h4>
            <a href="#practicas">Reiki</a>
            <a href="#practicas">Registros Akáshicos</a>
            <a href="#llamado">¿Qué te llama hoy?</a>
          </nav>
          <nav aria-label="Conocé más">
            <h4>Conocé más</h4>
            <a href="#may">Soy May</a>
            <a href="#respira">Respirá un minuto</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} Llama Divina · May Espelet · Mar del Plata</span>
            <span>Estas prácticas no sustituyen la atención médica ni psicológica.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
