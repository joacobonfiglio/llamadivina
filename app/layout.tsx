import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/hanken-grotesk/wght.css";
import "./globals.css";
import { SITE, FAQ } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Llama Divina · Reiki y Registros Akáshicos en Mar del Plata",
    template: "%s · Llama Divina",
  },
  description:
    "Sesiones individuales de Reiki y Registros Akáshicos con May Espelet en Mar del Plata. Una hora para volver a vos, a tu ritmo y sin juicios.",
  keywords: [
    "reiki mar del plata",
    "registros akáshicos mar del plata",
    "sesión de reiki",
    "lectura de registros akáshicos",
    "May Espelet",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: SITE.name,
    title: "Llama Divina · Un espacio para volver a vos",
    description:
      "Reiki y Registros Akáshicos con May Espelet en Mar del Plata. Sesiones individuales de una hora.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1D1830",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#negocio`,
      name: SITE.name,
      slogan: SITE.tagline,
      url: SITE.url,
      telephone: "+5492235929440",
      areaServed: { "@type": "City", name: "Mar del Plata" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mar del Plata",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      founder: { "@id": `${SITE.url}/#may` },
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sesión de Reiki", description: "Sesión individual de una hora." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lectura de Registros Akáshicos", description: "Sesión individual de una hora." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pack de tres encuentros", description: "Tres sesiones individuales de una hora." } },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}/#may`,
      name: SITE.owner,
      jobTitle: "Facilitadora de Reiki y Registros Akáshicos",
      worksFor: { "@id": `${SITE.url}/#negocio` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
