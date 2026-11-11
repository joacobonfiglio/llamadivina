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
| Tarjetas de sesiones (Reiki, Registros, Tres encuentros) | `lib/site.ts` → `SESIONES` |
| Opciones de "¿Qué te llama hoy?" | `lib/site.ts` → `LLAMADOS` |
| Palabras de la cinta | `lib/site.ts` → `PALABRAS` |
| Frases del mazo | `lib/site.ts` → `FRASES` |
| Preguntas frecuentes | `lib/site.ts` → `FAQ` |
| Los 4 momentos de la sesión | `components/Viaje.tsx` → `MOMENTOS` |
| Estilos y paleta | `app/globals.css` (tokens en `:root`) |
| Foto de May | `components/May.tsx` (agregar `/public/may.jpg` y reemplazar `.may-sky` por `next/image`) |

## Secciones

Hero con campo de energía (WebGL) · Cinta de palabras · **La experiencia**: una hora con May en 4 momentos
(scroll horizontal en desktop, tarjetas apiladas en el teléfono) · **Sesiones**: selector "¿Qué te llama hoy?" que recomienda
una de las 3 tarjetas · Respirá con la llama · Soy May (la cita se ilumina con el scroll) · Una frase para hoy ·
Cómo empezamos + Preguntas · Cierre.

Animaciones con `motion` y scroll suave con `lenis`. Todo respeta `prefers-reduced-motion`.
Todos los CTA abren WhatsApp con un mensaje ya escrito.
