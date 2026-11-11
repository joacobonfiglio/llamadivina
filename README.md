# Llama Divina — web

Web de **Llama Divina** (Reiki y Registros Akáshicos con May Espelet, Mar del Plata).
Next.js 16 (App Router) + TypeScript. Tipografías Cormorant Garamond + DM Sans.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
```

## Dónde se edita cada cosa

| Qué | Dónde |
| --- | --- |
| WhatsApp, nombre, ciudad | `lib/site.ts` → `SITE` |
| Preguntas frecuentes | `lib/site.ts` → `FAQ` |
| Textos de cada sección | `components/Secciones.tsx` |
| Menú | `components/Header.tsx` |
| Colores y tipografía | `app/globals.css` (variables en `:root`) |
| Fotos | `public/img/` (se importan en `components/Secciones.tsx`) |

## Fotos

Las fotos de paisaje son de Unsplash (licencia libre, uso comercial permitido sin atribución).
Cuando haya fotos propias de May o del espacio, reemplazar el archivo en `public/img/` con el mismo nombre
(por ejemplo `bosque-sendero.jpg` en la sección "Soy May").

## Secciones

Portada · Soy May · Valores · Frase · ¿Qué te llama hoy? (Reiki, Registros, Tres encuentros) ·
Tu primer encuentro · Preguntas · Invitación final · Pie.
Todos los botones abren WhatsApp con un mensaje ya escrito.
