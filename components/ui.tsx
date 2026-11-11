import { wa } from "@/lib/site";

export function Isotipo({ className, mono = false }: { className?: string; mono?: boolean }) {
  if (mono)
    return (
      <svg className={className} viewBox="0 0 60 76" aria-hidden="true">
        <path
          fillRule="evenodd"
          fill="currentColor"
          d="M30 2S6 26 6 46a24 24 0 0 0 48 0C54 26 30 2 30 2Zm0 28s-11 11-11 20a11 11 0 0 0 22 0c0-9-11-20-11-20Zm0 18a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
        />
      </svg>
    );
  return (
    <svg className={className} viewBox="0 0 60 76" aria-hidden="true">
      <defs>
        <linearGradient id="iso-g" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#D97F68" />
          <stop offset=".55" stopColor="#EDA65C" />
          <stop offset="1" stopColor="#FFE2B3" />
        </linearGradient>
      </defs>
      <path d="M30 2S6 26 6 46a24 24 0 0 0 48 0C54 26 30 2 30 2Z" fill="url(#iso-g)" />
      <path d="M30 30s-11 11-11 20a11 11 0 0 0 22 0c0-9-11-20-11-20Z" fill="#1D1830" opacity=".92" />
      <circle cx="30" cy="52" r="4" fill="#FFE2B3" />
    </svg>
  );
}

export function WaIcon({ className = "ico" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.8 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.3Z"
      />
    </svg>
  );
}

export function WaButton({
  text,
  children,
  variant = "luz",
  className = "",
}: {
  text: string;
  children: React.ReactNode;
  variant?: "luz" | "tinta" | "llama" | "linea";
  className?: string;
}) {
  return (
    <a className={`btn btn-${variant} ${className}`} href={wa(text)} target="_blank" rel="noopener noreferrer">
      <WaIcon />
      <span>{children}</span>
    </a>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}
