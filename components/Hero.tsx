import { FOTOS } from "@/lib/site";
import { Foto, WaButton } from "./ui";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="etiqueta">Reiki y Registros Akáshicos · Mar del Plata</p>
          <h1>Un espacio para volver a vos</h1>
          <p className="hero-p">
            Sesiones individuales de una hora con May Espelet. Para bajar el ritmo, escucharte y encontrar claridad, a
            tu tiempo.
          </p>
          <div className="hero-ctas">
            <WaButton text="Hola May, vi tu web y quiero reservar una sesión." variant="claro">
              Reservar por WhatsApp
            </WaButton>
            <a className="btn btn-borde-claro" href="#sesiones">
              Ver sesiones
            </a>
          </div>
        </div>
        <Foto src={FOTOS.hero} alt="El espacio de Llama Divina" className="hero-foto" />
      </div>
    </section>
  );
}
