import EnergyField from "./EnergyField";
import { WaButton } from "./ui";

const CORE: [number, number] = [0.74, 0.16];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <EnergyField core={CORE} />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="hero-in">
        <p className="hero-kicker">
          <span className="dot" aria-hidden="true" /> Reiki · Registros Akáshicos · Mar del Plata
        </p>
        <h1 className="hero-title">
          <span className="line">Un espacio</span>
          <span className="line">para <em>volver</em></span>
          <span className="line">
            <em>a vos.</em>
          </span>
        </h1>
        <p className="hero-lead">
          Bajá el ruido de afuera. Escuchá lo que hay en vos. Sesiones individuales de una hora, a tu ritmo, con May.
        </p>
        <div className="hero-ctas">
          <WaButton text="Hola May, quiero conectar conmigo. ¿Me contás cómo son las sesiones?" variant="luz">
            Quiero conectar conmigo
          </WaButton>
          <a className="link-arrow" href="#llamado">
            Descubrí qué te llama <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <p className="hero-touch" aria-hidden="true">Mové el dedo sobre la luz</p>
    </section>
  );
}
