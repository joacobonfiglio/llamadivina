# Llama Divina — web

Home experiencial para **Llama Divina** (Reiki y Registros Akáshicos con May Espelet, Mar del Plata).
Next.js 16 (App Router) + TypeScript. Diseño simple, sin librerías de UI.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
```

## Deploy en Vercel

1. Subí este repo a GitHub (`git init && git add . && git commit -m "Llama Divina web" && git branch -M main && git remote add origin <URL> && git push -u origin main`).
2. En Vercel: **Add New → Project → Import** el repo. Framework: Next.js (se detecta solo). Sin variables de entorno.
3. Conectá el dominio (ej. `llamadivina.com.ar`) y actualizá `SITE.url` en `lib/site.ts`.

## Dónde se edita cada cosa

| Qué | Dónde |
| --- | --- |
| WhatsApp, nombre, ciudad | `lib/site.ts` → `SITE` |
| Sesiones | `lib/site.ts` → `SESIONES` |
| Preguntas frecuentes | `lib/site.ts` → `FAQ` |
| Fotos (portada y May) | Subir a `/public` y poner la ruta en `lib/site.ts` → `FOTOS` |
| Pasos de "Cómo es una sesión" | `components/Secciones.tsx` → `PASOS` |
| Colores y tipografías | `app/globals.css` (variables en `:root`) |

## Secciones

Portada · Sesiones · Cómo es una sesión · Sobre May · Preguntas frecuentes · Contacto.
Sin dependencias de animación. Todos los botones abren WhatsApp con un mensaje ya escrito.
