import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import May from "@/components/May";
import Cierre from "@/components/Cierre";
import { ComoEs, Preguntas, Sesiones } from "@/components/Secciones";

export default function Home() {
  return (
    <>
      <a className="skip" href="#sesiones">
        Ir al contenido
      </a>
      <Nav />
      <main>
        <Hero />
        <Sesiones />
        <ComoEs />
        <May />
        <Preguntas />
      </main>
      <Cierre />
    </>
  );
}
