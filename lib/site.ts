export const SITE = {
  name: "Llama Divina",
  owner: "May Espelet",
  tagline: "Un encuentro con vos",
  city: "Mar del Plata",
  url: "https://llamadivina.com.ar",
  whatsapp: "5492235929440",
  whatsappLabel: "+54 9 223 592-9440",
};

export const wa = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const FAQ = [
  {
    q: "¿Necesito haber hecho una sesión antes?",
    a: "No. Muchas personas llegan a su primer encuentro sin saber nada de Reiki ni de Registros Akáshicos. Te explico todo antes de empezar y vamos a tu ritmo.",
  },
  {
    q: "¿Cuánto dura una sesión?",
    a: "Una hora. Incluye un momento para conversar al inicio y otro para cerrar con calma.",
  },
  {
    q: "¿En qué consiste el pack de tres sesiones?",
    a: "Son tres encuentros individuales de una hora para darle continuidad a tu proceso. Podés combinar Reiki y Registros Akáshicos según lo que vaya apareciendo.",
  },
  {
    q: "¿Cómo elijo entre Reiki y Registros Akáshicos?",
    a: "Reiki trabaja desde el cuerpo y la energía; los Registros, desde tus preguntas y la palabra. Si no sabés por dónde empezar, lo charlamos y elegimos juntas.",
  },
  {
    q: "¿Cuántas veces puedo acceder a los Registros Akáshicos?",
    a: "Depende de cada proceso. Suele ser bueno dejar pasar un tiempo entre lecturas para integrar lo recibido. Lo vemos según tu momento.",
  },
  {
    q: "¿Dónde se realizan y cuánto cuestan?",
    a: "Las sesiones son en Mar del Plata. Te paso la dirección, los valores y las modalidades disponibles por WhatsApp.",
  },
  {
    q: "¿Reemplaza un tratamiento médico o psicológico?",
    a: "No. Son prácticas de acompañamiento espiritual que suman a tu bienestar, pero no sustituyen la atención médica ni psicológica.",
  },
];
