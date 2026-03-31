import { useReducedMotion } from "framer-motion";
import type { TickerItem } from "../data/content";

export function TrustTicker({ items }: { items: TickerItem[] }) {
  const reducedMotion = useReducedMotion();
  const duplicated = [...items, ...items];

  return (
    <section className="trust-ticker" aria-label="Clinical trust highlights">
      {reducedMotion ? (
        <div className="trust-ticker-static">
          {items.map((item) => (
            <span key={item.label}>{item.label}</span>
          ))}
        </div>
      ) : (
        <div className="trust-ticker-marquee">
          <div className="trust-ticker-track">
            {duplicated.map((item, index) => (
              <span key={`${item.label}-${index}`}>{item.label}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

