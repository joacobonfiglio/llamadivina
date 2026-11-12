import { wa } from "@/lib/site";

/** Silueta de la llama: es el sello gráfico de la marca (máscara de fotos e ícono). */
export const LLAMA_PATH =
  "M220 0C260 90 440 190 440 370C440 500 340 600 220 600C100 600 0 500 0 370C0 260 60 190 110 140C115 200 140 240 175 260C160 160 190 70 220 0Z";

export function Llama({ className, title }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox="0 0 440 600" aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
      {title && <title>{title}</title>}
      <path d={LLAMA_PATH} fill="currentColor" />
    </svg>
  );
}

export function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
export function Wa({ text, children, className = "" }: { text: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={wa(text)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
