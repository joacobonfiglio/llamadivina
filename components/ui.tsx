import { wa } from "@/lib/site";

/** Isotipo: llama de trazo fino con una gota de luz adentro. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 52" fill="none" aria-hidden="true">
      <path
        d="M20 2c3.5 7.5 14 14.6 14 27.2C34 41 27.6 50 20 50S6 41 6 29.2C6 22 10 17.5 13 13.6c.3 4.4 2.1 7 4.3 8.4C16.6 14.8 18 8 20 2Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M20 26.5c2.4 3.6 6.2 6.9 6.2 11.6A6.2 6.2 0 0 1 20 44.3a6.2 6.2 0 0 1-6.2-6.2c0-4.7 3.8-8 6.2-11.6Z" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 1.5c.6 5.6 4.9 9.9 10.5 10.5-5.6.6-9.9 4.9-10.5 10.5C11.4 16.9 7.1 12.6 1.5 12 7.1 11.4 11.4 7.1 12 1.5Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export function Arrow({ className = "arrow", diag = true }: { className?: string; diag?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {diag ? (
        <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

/** Flor de la vida simple (Reiki). */
export function FlorDeVida({ className }: { className?: string }) {
  const r = 14;
  const c = [[0, 0], ...Array.from({ length: 6 }, (_, i) => [r * Math.cos((i * Math.PI) / 3), r * Math.sin((i * Math.PI) / 3)])];
  return (
    <svg className={className} viewBox="-46 -46 92 92" fill="none" aria-hidden="true">
      <circle r={r * 2.05} stroke="currentColor" strokeWidth=".7" />
      {c.map(([x, y], i) => (
        <circle key={i} cx={x.toFixed(2)} cy={y.toFixed(2)} r={r} stroke="currentColor" strokeWidth=".7" />
      ))}
    </svg>
  );
}

/** Estrella de dos triángulos en un círculo (Registros). */
export function Estrella({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="-46 -46 92 92" fill="none" aria-hidden="true">
      <circle r="34" stroke="currentColor" strokeWidth=".7" />
      <path d="M0-40L34.6 20H-34.6Z M0 40L-34.6-20H34.6Z" stroke="currentColor" strokeWidth=".7" strokeLinejoin="round" />
      <circle r="12" stroke="currentColor" strokeWidth=".7" />
    </svg>
  );
}

export function WaIcon({ className = "wa-ico" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.8 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.3Z"
      />
    </svg>
  );
}

/** Enlace a WhatsApp con mensaje ya escrito. */
export function Wa({
  text,
  children,
  className = "",
}: {
  text: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={wa(text)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
