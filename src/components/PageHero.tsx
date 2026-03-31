import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../lib/motion";

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <motion.div
        className="page-hero-inner"
        variants={fadeUp(0)}
        initial="hidden"
        animate="visible"
      >
        <span className="section-tag">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ? <div className="page-hero-actions">{actions}</div> : null}
      </motion.div>
    </section>
  );
}

