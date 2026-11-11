# Llama Divina — web

Home experiencial para **Llama Divina** (Reiki y Registros Akáshicos con May Espelet, Mar del Plata).
Next.js 16 (App Router) + TypeScript. Sin dependencias de UI: los visuales son WebGL y canvas propios.

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
| WhatsApp, URL, nombre | `lib/site.ts` → `SITE` |
| Opciones de "¿Qué te llama hoy?" | `lib/site.ts` → `LLAMADOS` |
| Frases del mazo | `lib/site.ts` → `FRASES` |
| Preguntas frecuentes (+ schema FAQ) | `lib/site.ts` → `FAQ` |
| SEO, Open Graph, JSON-LD | `app/layout.tsx` |
| Estilos y paleta | `app/globals.css` (tokens en `:root`) |
| Foto de May | `components/May.tsx` (reemplazar el arco por `next/image` con `/public/may.jpg`) |

## Secciones

Hero con campo de energía (WebGL) · Manifiesto que se ilumina con el scroll · ¿Qué te llama hoy? (puertas) ·
Reiki y Registros (ilustraciones generativas) · Respirá con la llama (1 o 3 minutos) · Tres encuentros (velas) ·
Soy May · Una frase para hoy (mazo) · Cómo empezamos · Preguntas · Cierre.

Todo respeta `prefers-reduced-motion`. Todos los CTA abren WhatsApp con un mensaje ya escrito.
