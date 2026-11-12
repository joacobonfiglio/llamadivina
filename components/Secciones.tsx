import Image from "next/image";
import { FAQ, SITE } from "@/lib/site";
import { Arrow, Llama, Wa, WaIcon } from "./ui";
import imgMar from "@/public/img/mar-atardecer.jpg";
import imgBosque from "@/public/img/bosque-sendero.jpg";
import imgBruma from "@/public/img/bosque-bruma.jpg";
import imgLago from "@/public/img/lago-violeta.jpg";
import imgVela from "@/public/img/vela.jpg";
import imgMarRosa from "@/public/img/mar-rosa.jpg";

/* ——— Portada ——— */
export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-izq">
        <h1 className="hero-titulo entra entra-1">
          Encendé
          <br />
          tu <em>pausa.</em>
        </h1>
        <div className="hero-pie entra entra-2">
          <p>
            Reiki y Registros Akáshicos con May Espelet. Una hora para bajar el ruido de afuera y volver a vos, en Mar
            del Plata.
          </p>
          <Wa text="Hola May, vi tu web y quiero reservar una sesión." className="btn btn-coral btn-lg">
            Reservá tu sesión <Arrow />
          </Wa>
        </div>
      </div>

      <div className="hero-der">
        <span className="hero-sol" aria-hidden="true" />
        <span className="etq hero-num">( 01 )</span>
        <ul className="etq hero-lista" aria-label="Sesiones">
          <li>Reiki</li>
          <li>Registros Akáshicos</li>
          <li>Tres encuentros</li>
        </ul>
        <div className="mascara-llama hero-llama entra entra-3">
          <Image src={imgMar} alt="El mar al atardecer en la costa" placeholder="blur" priority fill sizes="(max-width: 900px) 80vw, 460px" />
        </div>
        <p className="hero-lema">Tu pausa · Tu encuentro · Tu luz</p>
      </div>
    </section>
  );
}

/* ——— Manifiesto ——— */
export function Manifiesto() {
  const valores = [
    ["Un momento para vos", "Una hora sin apuro, solo tuya."],
    ["Escucha sin juicios", "Llegás como estés. Todo tiene lugar."],
    ["Conexión con tu interior", "La respuesta vive en vos; yo acompaño."],
  ];
  return (
    <section className="manifiesto">
      <div className="container">
        <span className="etq" data-reveal>( 02 ) · Llama Divina</span>
        <p className="manifiesto-txt" data-reveal>
          No hace falta tener todas las respuestas. <em>Podés empezar por escucharte.</em> Lo espiritual también habita
          en lo cotidiano
          <Llama className="manifiesto-llama" />
        </p>
        <div className="valores">
          {valores.map(([t, d], i) => (
            <div className="valor" key={t} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="valor-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Sesiones ——— */
const SESIONES = [
  {
    id: "reiki",
    n: "( 03 )",
    tag: "Pausa & presencia",
    t: "Reiki",
    p: "Una práctica espiritual centrada en la energía y la presencia. Te recostás, respirás y dejás que el cuerpo se acomode.",
    para: ["Cansancio o tensión acumulada", "Ganas de frenar y volver al cuerpo", "Tu primera vez en algo así"],
    cta: "Quiero un momento de calma",
    msg: "Hola May, quiero un momento de calma. Me gustaría reservar una sesión de Reiki.",
    img: imgBruma,
    alt: "Bosque con bruma",
  },
  {
    id: "registros",
    n: "( 04 )",
    tag: "Guía & nuevas miradas",
    t: "Registros Akáshicos",
    p: "Para cuando buscás una guía más allá de la razón. Traés tus preguntas, abrimos tus registros y escuchamos qué tienen para decirte.",
    para: ["Una decisión que te cuesta tomar", "Preguntas que vuelven una y otra vez", "Un cambio de etapa"],
    cta: "Quiero explorar mi camino",
    msg: "Hola May, quiero explorar mi camino. Me interesa una lectura de Registros Akáshicos.",
    img: imgLago,
    alt: "Un árbol solo en un lago al anochecer",
  },
];

export function Sesiones() {
  return (
    <section className="sesiones" id="sesiones">
      <div className="sesiones-head container">
        <h2 className="titulo" data-reveal>
          ¿Qué te <em>llama</em> hoy?
        </h2>
        <p data-reveal>
          Dos caminos para un mismo encuentro con vos. Sesiones individuales de una hora. Si no sabés por dónde empezar,
          lo charlamos.
        </p>
      </div>

      {SESIONES.map((s) => (
        <article className={`sesion sesion-${s.id}`} key={s.id}>
          <div className="container sesion-in">
            <div className="sesion-foto" data-reveal>
              <div className={s.id === "reiki" ? "mascara-circulo" : "mascara-arco"}>
                <Image src={s.img} alt={s.alt} placeholder="blur" fill sizes="(max-width: 900px) 80vw, 480px" />
              </div>
            </div>
            <div className="sesion-copy" data-reveal>
              <span className="etq">
                {s.n} · {s.tag}
              </span>
              <h3 className="sesion-t">{s.t}</h3>
              <p className="sesion-p">{s.p}</p>
              <ul className="sesion-para">
                {s.para.map((x) => (
                  <li key={x}>
                    <Llama className="mini-llama" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="sesion-pie">
                <Wa text={s.msg} className="btn btn-claro btn-lg">
                  {s.cta} <Arrow />
                </Wa>
                <span className="sesion-meta">1 hora · Individual · Presencial</span>
              </div>
            </div>
          </div>
        </article>
      ))}

      <div className="tres">
        <div className="container tres-in">
          <div className="tres-llamas" aria-hidden="true">
            <Llama />
            <Llama />
            <Llama />
          </div>
          <div className="tres-copy" data-reveal>
            <span className="etq">( 05 ) · Dale continuidad a tu espacio</span>
            <h3 className="tres-t">
              Tres encuentros <em>para vos</em>
            </h3>
            <p>
              Un pack de tres sesiones de una hora para sostener un proceso. Podés combinar Reiki y Registros según lo
              que vaya apareciendo.
            </p>
            <Wa text="Hola May, me interesa el pack de tres encuentros. ¿Me contás las opciones?" className="btn btn-verde btn-lg">
              Dar continuidad a mi espacio <Arrow />
            </Wa>
          </div>
          <div className="tres-foto" data-reveal>
            <Image src={imgVela} alt="Una vela encendida" placeholder="blur" fill sizes="(max-width: 900px) 60vw, 300px" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Soy May ——— */
export function SoyMay() {
  return (
    <section className="may" id="soy-may">
      <div className="container may-in">
        <div className="may-foto" data-reveal>
          <div className="mascara-llama">
            <Image src={imgBosque} alt="Un sendero en el bosque con luz" placeholder="blur" fill sizes="(max-width: 900px) 70vw, 420px" />
          </div>
          <span className="may-sello">
            May
            <br />
            Espelet
          </span>
        </div>
        <div className="may-copy">
          <span className="etq" data-reveal>( 06 ) · La persona detrás de Llama Divina</span>
          <h2 className="titulo" data-reveal>
            Soy May. <em>Qué lindo encontrarnos.</em>
          </h2>
          <div className="may-cols" data-reveal>
            <p>
              Llama Divina nace de mi vocación de acompañar a las personas y acercar el mundo espiritual a nuestra
              experiencia humana.
            </p>
            <p>
              A través del Reiki y los Registros Akáshicos te propongo un espacio de encuentro con vos misma, respetando
              tu sensibilidad y tu forma de vivir la espiritualidad.
            </p>
          </div>
          <div className="may-firma" data-reveal>
            <span>Con amor, May</span>
            <Wa text="Hola May, leí sobre vos en tu web y me gustaría que conversemos." className="link">
              Conversemos <Arrow />
            </Wa>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— Primer encuentro ——— */
const PASOS = [
  ["Me escribís", "Por WhatsApp, me contás qué estás buscando y resolvemos tus dudas."],
  ["Lo coordinamos", "Elegimos juntas la sesión que te llama, el día y el horario."],
  ["Te regalás una hora", "Llegás, respirás y el resto del encuentro lo vamos sintiendo."],
];

export function Primer() {
  return (
    <section className="primer">
      <div className="container">
        <div className="primer-head">
          <span className="etq" data-reveal>( 07 ) · Simple, cercano y a tu ritmo</span>
          <h2 className="titulo" data-reveal>
            Tu primer encuentro <em>empieza con una charla.</em>
          </h2>
        </div>
        <ol className="pasos">
          {PASOS.map(([t, d], i) => (
            <li key={t} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
              <span className="paso-n">{i + 1}</span>
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
    <section className="preguntas" id="preguntas">
      <div className="container preguntas-in">
        <div className="preguntas-head" data-reveal>
          <span className="etq">( 08 ) · Antes del primer paso</span>
          <h2 className="titulo">
            Quizás te estés <em>preguntando</em>
          </h2>
          <Wa text="Hola May, tengo una pregunta antes de reservar." className="link">
            ¿Otra duda? Escribime <Arrow />
          </Wa>
        </div>
        <div className="faq" data-reveal>
          {FAQ.map((f, i) => (
            <details key={f.q}>
              <summary>
                <span className="faq-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q">{f.q}</span>
                <span className="faq-icono" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Cierre ——— */
export function Cierre() {
  return (
    <section className="cierre" id="contacto">
      <span className="cierre-sol" aria-hidden="true" />
      <div className="container cierre-in">
        <div className="cierre-copy">
          <span className="etq" data-reveal>( 09 ) · Escuchá esa pequeña invitación</span>
          <h2 className="cierre-t" data-reveal>
            Este momento puede ser <em>para vos.</em>
          </h2>
          <p data-reveal>Si algo de este espacio resuena con vos, escribime. Podemos empezar por una conversación.</p>
          <div className="cierre-acciones" data-reveal>
            <Wa text="Hola May, quiero dar el primer paso. ¿Charlamos?" className="btn btn-verde btn-xl">
              Demos el primer paso <Arrow />
            </Wa>
            <span>WhatsApp {SITE.whatsappLabel}</span>
          </div>
        </div>
        <div className="mascara-llama cierre-llama" data-reveal>
          <Image src={imgMarRosa} alt="El mar con nubes rosadas" placeholder="blur" fill sizes="(max-width: 900px) 70vw, 420px" />
        </div>
      </div>
    </section>
  );
}

/* ——— Pie ——— */
export function Pie() {
  return (
    <footer className="pie">
      <div className="container">
        <p className="pie-grande" aria-hidden="true">
          Llama <em>Divina</em>
        </p>
        <div className="pie-grid">
          <p>
            Reiki &amp; Registros Akáshicos
            <br />
            con {SITE.owner} · {SITE.city}
          </p>
          <nav aria-label="Pie">
            <a href="#sesiones">Sesiones</a>
            <a href="#soy-may">Soy May</a>
            <a href="#preguntas">Preguntas</a>
            <Wa text="Hola May, vi tu web y me gustaría consultar.">WhatsApp</Wa>
          </nav>
          <p className="pie-legal">
            © {new Date().getFullYear()} Llama Divina. Prácticas de acompañamiento espiritual: no sustituyen la atención
            médica ni psicológica.
          </p>
        </div>
      </div>
      <Wa text="Hola May, vi tu web y me gustaría consultar." className="wa-flotante">
        <WaIcon />
        <span className="sr">Escribir por WhatsApp</span>
      </Wa>
    </footer>
  );
}
