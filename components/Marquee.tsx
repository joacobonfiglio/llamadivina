import { PALABRAS } from "@/lib/site";
import { Isotipo } from "./ui";

/** Cinta de palabras que fluye: lo que se busca en una sesión. */
export default function Marquee() {
  const row = PALABRAS.map((p) => (
    <span className="mq-item" key={p}>
      <span>{p}</span>
      <Isotipo className="mq-iso" mono />
    </span>
  ));
  return (
    <div className="marquee" aria-label={PALABRAS.join(", ")}>
      <div className="mq-track" aria-hidden="true">
        <div className="mq-row">{row}</div>
        <div className="mq-row">{row}</div>
      </div>
    </div>
  );
}
