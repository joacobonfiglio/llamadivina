import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { Caminos, Frase, Hero, Invitacion, Pie, Preguntas, Primer, SoyMay, Valores } from "@/components/Secciones";

export default function Home() {
  return (
    <>
      <a className="skip" href="#sesiones">
        Ir al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <SoyMay />
        <Valores />
        <Frase />
        <Caminos />
        <Primer />
        <Preguntas />
        <Invitacion />
      </main>
      <Pie />
      <Reveal />
    </>
  );
}
