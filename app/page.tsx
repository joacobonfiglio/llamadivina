import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Llamado from "@/components/Llamado";
import Practicas from "@/components/Practicas";
import Respira from "@/components/Respira";
import Encuentros from "@/components/Encuentros";
import May from "@/components/May";
import Frase from "@/components/Frase";
import Pasos from "@/components/Pasos";
import Faq from "@/components/Faq";
import Cierre from "@/components/Cierre";
import FloatingWA from "@/components/FloatingWA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <a className="skip" href="#llamado">
        Ir al contenido
      </a>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Llamado />
        <Practicas />
        <Respira />
        <Encuentros />
        <May />
        <Frase />
        <Pasos />
        <Faq />
      </main>
      <Cierre />
      <FloatingWA />
      <Reveal />
    </>
  );
}
