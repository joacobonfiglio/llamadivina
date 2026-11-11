import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Viaje from "@/components/Viaje";
import Sesiones from "@/components/Sesiones";
import Respira from "@/components/Respira";
import May from "@/components/May";
import Frase from "@/components/Frase";
import Empezar from "@/components/Empezar";
import Cierre from "@/components/Cierre";
import StickyCTA from "@/components/StickyCTA";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <a className="skip" href="#sesiones">
        Ir a las sesiones
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Viaje />
        <Sesiones />
        <Respira />
        <May />
        <Frase />
        <Empezar />
      </main>
      <Cierre />
      <StickyCTA />
      <SmoothScroll />
    </>
  );
}
