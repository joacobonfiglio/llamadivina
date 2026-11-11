import Image from "next/image";
import { FAQ, SITE } from "@/lib/site";
import { Arrow, Estrella, FlorDeVida, Sparkle, Wa, WaIcon } from "./ui";
import imgMar from "@/public/img/mar-atardecer.jpg";
import imgBosque from "@/public/img/bosque-sendero.jpg";
import imgSierras from "@/public/img/sierras-niebla.jpg";
import imgBruma from "@/public/img/bosque-bruma.jpg";
import imgLago from "@/public/img/lago-violeta.jpg";
import imgVela from "@/public/img/vela.jpg";
import imgMarRosa from "@/public/img/mar-rosa.jpg";

/* ——— Portada ——— */
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-in">
        <div className="hero-copy">
          <p className="kicker reveal-1">Reiki &amp; Registros Akáshicos · con May</p>
          <h1 className="titulo-xl reveal-2">
            Un espacio para <em>volver a vos</em>
          </h1>
          <p className="hero-p reveal-3">
            Bajá el ruido de afuera. Escuchá lo que hay en vos. Un encuentro entre tu mundo espiritual y tu vida
            cotidiana.
          </p>
          <div className="hero-acciones reveal-4">
            <Wa text="Hola May, quiero conectar conmigo. ¿Me contás cómo son las sesiones?" className="btn btn-verde btn-lg">
              Quiero conectar conmigo <Arrow />
            </Wa>
            <p className="hero-meta">Sesiones individuales · 1 hora · A tu ritmo</p>
          </div>
        </div>

        <div className="hero-visual reveal-3">
          <div className="arco">
            <span className="arco-linea" aria-hidden="true" />
            <div className="arco-foto">
              <Image
                src={imgMar}
                alt="El mar al atardecer"
                placeholder="blur"
                priority
                fill
                sizes="(max-width: 900px) 90vw, 480px"
              />
              <p className="arco-txt">
                Tu pausa <span>·</span> Tu encuentro <span>·</span> Tu luz
              </p>
            </div>
            <Wa text="Hola May, quiero reservar una sesión." className="sello">
              <svg viewBox="0 0 120 120" className="sello-txt" aria-hidden="true">
                <defs>
                  <path id="circulo" d="M60 60m-43 0a43 43 0 1 1 86 0a43 43 0 1 1-86 0" />
                </defs>
                <text>
                  <textPath href="#circulo" startOffset="0">
                    Reservá tu sesión · Reservá tu sesión ·
                  </textPath>
                </text>
              </svg>
              <Sparkle className="sello-ico" />
              <span className="sr">Reservá tu sesión</span>
            </Wa>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Soy May ——— */
export function SoyMay() {
  return (
    <section className="seccion may" id="soy-may">
      <div className="container may-in">
        <figure className="may-foto" data-reveal>
          <Image src={imgBosque} alt="Un sendero en el bosque con luz de la mañana" placeholder="blur" fill sizes="(max-width: 900px) 92vw, 460px" />
          <figcaption>Lo espiritual también habita en lo cotidiano.</figcaption>
        </figure>
        <div className="may-copy" data-reveal>
          <p className="kicker">La persona detrás de Llama Divina</p>
          <h2 className="titulo-l">
            Soy May
            <br />
            <em>Qué lindo encontrarnos</em>
          </h2>
          <p>
            Te invito a conectar y a expandir tu ser. Llama Divina nace de mi vocación de acompañar a las personas y
            acercar el mundo espiritual a nuestra experiencia humana.
          </p>
          <p>
            A través del Reiki y los Registros Akáshicos, te propongo un espacio de encuentro con vos misma, respetando
            tu sensibilidad y tu forma de vivir la espiritualidad.
          </p>
          <p className="firma">May Espelet</p>
          <Wa text="Hola May, leí sobre vos en tu web y me gustaría que conversemos." className="link-linea">
            Conversemos <Arrow />
          </Wa>
        </div>
      </div>
    </section>
  );
}

/* ——— Franja de valores ——— */
export function Valores() {
  const v = ["Un momento para vos", "Escucha sin juicios", "Conexión con tu interior"];
  return (
    <div className="valores" role="list">
      <div className="container valores-in">
        {v.map((x, i) => (
          <span key={x} className="valor" role="listitem">
            {i > 0 && <Sparkle className="valor-ico" />}
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ——— Frase sobre foto ——— */
export function Frase() {
  return (
    <section className="banda banda-frase">
      <Image src={imgSierras} alt="" placeholder="blur" fill sizes="100vw" className="banda-img" />
      <div className="container banda-in" data-reveal>
        <Sparkle className="banda-ico" />
        <h2 className="titulo-l">
          No hace falta tener todas las respuestas
          <br />
          <em>Podés empezar por escucharte</em>
        </h2>
        <p>
          A veces, lo que buscamos es un momento de pausa. Un lugar para explorar lo que sentimos, conectar con nuestra
          espiritualidad y darnos permiso para simplemente ser.
        </p>
      </div>
    </section>
  );
}

/* ——— ¿Qué te llama hoy? ——— */
const CAMINOS = [
  {
    id: "reiki",
    n: "01 / Pausa & presencia",
    t: "Reiki",
    p: "Una práctica espiritual centrada en la energía y la presencia. Un espacio tranquilo para hacer una pausa y conectar con tu cuerpo y tus sensaciones.",
    cta: "Quiero un momento de calma",
    msg: "Hola May, quiero un momento de calma. Me gustaría reservar una sesión de Reiki.",
    img: imgBruma,
    alt: "Bosque con bruma",
    Icono: FlorDeVida,
  },
  {
    id: "registros",
    n: "02 / Guía & nuevas miradas",
    t: "Registros Akáshicos",
    p: "Para esos momentos en los que te sentís perdida, buscás una guía más allá de la razón o querés descubrir algo nuevo de vos. Un espacio de exploración espiritual, a través de la canalización, para abrir otras miradas sobre tu camino.",
    cta: "Quiero explorar mi camino",
    msg: "Hola May, quiero explorar mi camino. Me interesa una lectura de Registros Akáshicos.",
    img: imgLago,
    alt: "Un árbol solo en un lago al anochecer",
    Icono: Estrella,
  },
];

export function Caminos() {
  return (
    <section className="seccion caminos" id="sesiones">
      <div className="container">
        <div className="caminos-head" data-reveal>
          <div>
            <p className="kicker">Dos caminos, un encuentro con vos</p>
            <h2 className="titulo-l">¿Qué te llama hoy?</h2>
          </div>
          <p className="caminos-intro">
            Elegí la experiencia que resuene con tu momento. Si no sabés por dónde empezar, podemos conversarlo.
          </p>
        </div>

        <div className="caminos-grid">
          {CAMINOS.map(({ id, n, t, p, cta, msg, img, alt, Icono }) => (
            <article className={`camino camino-${id}`} key={id} data-reveal>
              <Image src={img} alt={alt} placeholder="blur" fill sizes="(max-width: 900px) 92vw, 560px" className="camino-img" />
              <div className="camino-in">
                <Icono className="camino-ico" />
                <p className="camino-n">{n}</p>
                <h3 className="titulo-m">{t}</h3>
                <p className="camino-p">{p}</p>
                <Wa text={msg} className="camino-cta">
                  {cta} <Arrow />
                </Wa>
              </div>
            </article>
          ))}
        </div>

        <div className="tres" data-reveal>
          <div className="tres-foto">
            <Image src={imgVela} alt="Una vela encendida" placeholder="blur" fill sizes="160px" />
          </div>
          <div className="tres-titulo">
            <p className="kicker">Dale continuidad a tu espacio</p>
            <h3 className="titulo-m">
              Tres encuentros <em>para vos</em>
            </h3>
          </div>
          <p className="tres-p">
            También podés elegir un pack de tres sesiones de una hora. Consultame las opciones y coordinamos juntas cómo
            acompañar tu momento.
          </p>
          <Wa text="Hola May, me interesa el pack de tres encuentros. ¿Me contás las opciones?" className="btn btn-borde">
            Dar continuidad a mi espacio <Arrow />
          </Wa>
        </div>
      </div>
    </section>
  );
}

/* ——— Tu primer encuentro ——— */
const PASOS = [
  ["Me escribís", "Por WhatsApp, me contás qué estás buscando y resolvemos tus dudas."],
  ["Lo coordinamos", "Conversamos sobre la sesión que te llama y acordamos día y horario."],
  ["Te regalás una hora", "Un encuentro individual para estar presente y explorar tu espiritualidad."],
];

export function Primer() {
  return (
    <section className="seccion primer" id="primer-encuentro">
      <div className="container">
        <div className="primer-head" data-reveal>
          <p className="kicker">Simple, cercano y a tu ritmo</p>
          <h2 className="titulo-l">
            Tu primer encuentro
            <br />
            <em>empieza con una charla</em>
          </h2>
        </div>
        <ol className="pasos">
          {PASOS.map(([t, d], i) => (
            <li key={t} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="paso-n">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ——— Preguntas ——— */
export function Preguntas() {
  return (
    <section className="seccion preguntas" id="preguntas">
      <div className="container preguntas-in">
        <div className="preguntas-head" data-reveal>
          <p className="kicker">Antes de dar el primer paso</p>
          <h2 className="titulo-l">
            Quizás te estés
            <br />
            <em>preguntando</em>
          </h2>
          <Wa text="Hola May, tengo una pregunta antes de reservar." className="link-linea">
            ¿Otra duda? Escribime <Arrow />
          </Wa>
        </div>
        <div className="faq" data-reveal>
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>
                {f.q}
                <span className="faq-icono" aria-hidden="true" />
              </summary>
              <div className="faq-r">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Invitación final ——— */
export function Invitacion() {
  return (
    <section className="banda banda-cierre" id="contacto">
      <Image src={imgMarRosa} alt="" placeholder="blur" fill sizes="100vw" className="banda-img" />
      <div className="container banda-in" data-reveal>
        <Sparkle className="banda-ico" />
        <p className="kicker">Escuchá esa pequeña invitación</p>
        <h2 className="titulo-xl">
          Este momento
          <br />
          <em>puede ser para vos</em>
        </h2>
        <p>Si algo de este espacio resuena con vos, escribime. Podemos empezar por una conversación.</p>
        <Wa text="Hola May, quiero dar el primer paso. ¿Charlamos?" className="btn btn-rosa btn-lg">
          Demos el primer paso <Arrow />
        </Wa>
      </div>
    </section>
  );
}

/* ——— Pie ——— */
export function Pie() {
  return (
    <footer className="pie">
      <div className="container">
        <div className="pie-grid">
          <div className="pie-marca">
            <p className="kicker">Reiki &amp; Registros Akáshicos</p>
            <p className="pie-nombre">
              Llama <em>Divina</em>
              <Sparkle className="pie-ico" />
            </p>
            <p className="pie-p">Un puente entre tu mundo espiritual y tu vida cotidiana.</p>
            <p className="pie-firma">Con amor, May.</p>
          </div>
          <nav className="pie-nav" aria-label="Tu recorrido">
            <p className="kicker">Tu recorrido</p>
            <a href="#sesiones">
              Reiki <Arrow />
            </a>
            <a href="#sesiones">
              Registros Akáshicos <Arrow />
            </a>
            <a href="#soy-may">
              Conocé a May <Arrow />
            </a>
            <a href="#preguntas">
              Resolvé tus dudas <Arrow />
            </a>
          </nav>
          <div className="pie-contacto">
            <p className="kicker">Empecemos por una charla</p>
            <p className="pie-pregunta">¿Sentís que este es tu momento?</p>
            <Wa text="Hola May, siento que es mi momento. ¿Conversamos?" className="link-linea link-claro">
              Conversemos sobre tu momento <Arrow />
            </Wa>
            <p className="pie-meta">
              Encuentros individuales · 1 hora · {SITE.city}
              <br />
              WhatsApp {SITE.whatsappLabel}
            </p>
          </div>
        </div>
        <div className="pie-base">
          <p>
            © {new Date().getFullYear()} Llama Divina · {SITE.owner}
          </p>
          <p>Prácticas de acompañamiento espiritual. No sustituyen la atención médica ni psicológica.</p>
          <a href="#inicio" className="pie-arriba">
            Volver al inicio <Arrow diag={false} className="arrow arrow-up" />
          </a>
        </div>
      </div>
      <Wa text="Hola May, vi tu web y me gustaría consultar." className="wa-flotante">
        <WaIcon />
        <span className="sr">Escribir por WhatsApp</span>
      </Wa>
    </footer>
  );
}
