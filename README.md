# Llama Divina — web

Web de **Llama Divina** (Reiki y Registros Akáshicos con May Espelet, Mar del Plata).
Next.js 16 (App Router) + TypeScript. Tipografías Fraunces + DM Sans.
Sistema visual "póster": bloques de color plenos y la silueta de la llama como máscara de las fotos.

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
(por ejemplo `bosque-sendero.jpg` en la sección "Soy May", que se muestra recortada con la forma de la llama).

## Secciones

Portada · Manifiesto y valores · ¿Qué te llama hoy? (Reiki, Registros Akáshicos, Tres encuentros) · Soy May ·
Tu primer encuentro · Preguntas · Cierre · Pie.

La forma de la llama está en `components/ui.tsx` (`LLAMA_PATH`) y como máscara CSS en `app/globals.css` (`--llama-mask`).
Todos los botones abren WhatsApp con un mensaje ya escrito.
