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

export type Sesion = {
  id: string;
  nombre: string;
  duracion: string;
  texto: string;
  para: string[];
  mensaje: string;
};

export const SESIONES: Sesion[] = [
  {
    id: "reiki",
    nombre: "Reiki",
    duracion: "Sesión individual · 1 hora",
    texto: "Te recostás, respirás y dejás que la energía se acomode. Una pausa para el cuerpo y la cabeza.",
    para: ["Cansancio o tensión acumulada", "Ganas de bajar el ritmo", "Primera vez en algo así"],
    mensaje: "Hola May, me gustaría reservar una sesión de Reiki.",
  },
  {
    id: "registros",
    nombre: "Registros Akáshicos",
    duracion: "Sesión individual · 1 hora",
    texto: "Traés tus preguntas, abrimos tus registros y escuchamos qué tienen para decirte. Te ayudo a formularlas antes.",
    para: ["Una decisión que te cuesta tomar", "Preguntas que se repiten", "Un cambio de etapa"],
    mensaje: "Hola May, me gustaría hacer una lectura de Registros Akáshicos.",
  },
  {
    id: "tres",
    nombre: "Tres encuentros",
    duracion: "3 sesiones de 1 hora",
    texto: "Para acompañar un proceso con tiempo. Podés combinar Reiki y Registros según lo que vaya apareciendo.",
    para: ["Sostener algo que se movió", "Combinar las dos prácticas", "Un acompañamiento continuo"],
    mensaje: "Hola May, quiero sostener un proceso. ¿Me contás cómo es el pack de tres encuentros?",
  },
];

/** Fotos: agregá los archivos en /public y poné la ruta acá (ej. "/may.jpg"). Mientras sea null se muestra un fondo de color. */
export const FOTOS: { hero: string | null; may: string | null } = {
  hero: null,
  may: null,
};
