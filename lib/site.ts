export const SITE = {
  name: "Llama Divina",
  owner: "May Espelet",
  tagline: "Un encuentro con vos",
  city: "Mar del Plata",
  url: "https://llamadivina.com.ar",
  whatsapp: "5492235929440",
  whatsappLabel: "+54 9 223 592-9440",
};

export const wa = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export type Llamado = {
  id: string;
  pregunta: string;
  corto: string;
  practica: string;
  titulo: string;
  texto: string;
  cta: string;
  mensaje: string;
  tono: "reiki" | "registros" | "tres" | "charla";
};

export const LLAMADOS: Llamado[] = [
  {
    id: "frenar",
    pregunta: "Necesito frenar un poco",
    corto: "Cansancio, ruido, cabeza que no para",
    practica: "Reiki",
    titulo: "Una hora de Reiki para bajar el ritmo",
    texto:
      "Te recostás, respirás y dejás que la energía se acomode. No necesitás saber nada antes ni creer en nada en particular.",
    cta: "Quiero un momento de calma",
    mensaje: "Hola May, siento que necesito frenar un poco. Me gustaría una sesión de Reiki.",
    tono: "reiki",
  },
  {
    id: "preguntas",
    pregunta: "Tengo preguntas sobre mi camino",
    corto: "Una decisión, un cambio, algo que se repite",
    practica: "Registros Akáshicos",
    titulo: "Una lectura de Registros Akáshicos",
    texto:
      "Traés tus preguntas, abrimos tus registros y escuchamos qué tienen para decirte. Te ayudo a formular las preguntas antes del encuentro.",
    cta: "Quiero explorar mi camino",
    mensaje: "Hola May, tengo algunas preguntas sobre mi camino. Me interesa una lectura de Registros Akáshicos.",
    tono: "registros",
  },
  {
    id: "proceso",
    pregunta: "Quiero sostener un proceso",
    corto: "Algo se movió y quiero darle tiempo",
    practica: "Tres encuentros",
    titulo: "El pack de tres encuentros",
    texto:
      "Tres sesiones de una hora para acompañar lo que se va moviendo. Podés combinar Reiki y Registros según lo que aparezca.",
    cta: "Dar continuidad a mi espacio",
    mensaje: "Hola May, quiero sostener un proceso. ¿Me contás cómo es el pack de tres encuentros?",
    tono: "tres",
  },
  {
    id: "nose",
    pregunta: "No sé, pero algo me llama",
    corto: "Está perfecto no saber",
    practica: "Una charla",
    titulo: "Empecemos por una charla",
    texto:
      "Escribime, contame un poco cómo estás y vemos juntos qué práctica te puede hacer bien. Sin compromiso.",
    cta: "Conversemos",
    mensaje: "Hola May, no sé bien qué necesito, pero siento que algo me llama. ¿Charlamos?",
    tono: "charla",
  },
];

export const FRASES = [
  "Lo que buscás afuera <em>también te está buscando adentro.</em>",
  "No tenés que entenderlo todo hoy. <em>Alcanza con escucharte.</em>",
  "Tu ritmo <em>también es un camino.</em>",
  "Descansar <em>también es avanzar.</em>",
  "Hay respuestas que llegan <em>cuando dejás de apurarlas.</em>",
  "Tu sensibilidad no es un exceso: <em>es una brújula.</em>",
  "Hoy podés elegir <em>una cosa que te haga bien.</em>",
  "Soltar no es perder. <em>Es hacer lugar.</em>",
  "Tu luz no se apaga: <em>a veces solo pide aire.</em>",
  "Volver a vos <em>siempre es posible.</em>",
];

export const FAQ = [
  {
    q: "¿Necesito experiencia previa?",
    a: "No. Muchas personas llegan a su primera sesión sin saber nada de Reiki ni de Registros. Te explico todo antes de empezar.",
  },
  {
    q: "¿Cuánto dura cada sesión?",
    a: "Una hora. Incluye un momento para conversar al inicio y otro para cerrar con calma.",
  },
  {
    q: "¿Cómo elijo entre Reiki y Registros Akáshicos?",
    a: "Reiki trabaja más desde el cuerpo y la energía; los Registros, desde la palabra y tus preguntas. Si no sabés, lo charlamos y lo elegimos.",
  },
  {
    q: "¿Qué incluye el pack de tres encuentros?",
    a: "Tres sesiones individuales de una hora, que podés combinar como te haga bien. Te paso precios y opciones por WhatsApp.",
  },
  {
    q: "¿Dónde son las sesiones?",
    a: "En Mar del Plata. Te paso la dirección y las modalidades disponibles cuando coordinamos.",
  },
  {
    q: "¿Reemplaza un tratamiento médico o psicológico?",
    a: "No. Estas prácticas acompañan tu bienestar, pero no sustituyen la atención médica ni psicológica.",
  },
];
