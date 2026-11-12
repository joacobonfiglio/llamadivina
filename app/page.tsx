import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { Cierre, Hero, Manifiesto, Pie, Preguntas, Primer, Sesiones, SoyMay } from "@/components/Secciones";

export default function Home() {
  return (
    <>
      <a className="skip" href="#sesiones">
        Ir al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <Manifiesto />
        <Sesiones />
        <SoyMay />
        <Primer />
        <Preguntas />
        <Cierre />
      </main>
      <Pie />
      <Reveal />
    </>
  );
}
