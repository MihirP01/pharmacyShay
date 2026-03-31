import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScrollScene({
  id,
  children,
  drift = "left",
  density = "standard",
  flow = false,
}: {
  id: string;
  children: ReactNode;
  drift?: "left" | "right";
  density?: "standard" | "tight" | "compact";
  flow?: boolean;
}) {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [minHeight, setMinHeight] = useState<number | null>(null);
  const [isStacked, setIsStacked] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const query = window.matchMedia("(max-width: 980px)");
    const update = () => setIsStacked(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isStacked || flow) {
      setMinHeight(null);
      return;
    }

    const node = frameRef.current;
    if (!node) {
      return;
    }

    const offsets = {
      standard: 260,
      tight: 190,
      compact: 140,
    } as const;

    const measure = () => setMinHeight(node.offsetHeight + offsets[density]);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [density, flow, isStacked]);

  const xOffset = drift === "right" ? 42 : -42;
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.24, 0.76, 0.92, 1],
    [0, 0.4, 1, 1, 0.4, 0],
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [70, 14, 0, -14, -70]);
  const x = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [xOffset, 8, 0, -8, -xOffset]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.976, 0.992, 1, 0.992, 0.976]);
  const flowOpacity = useTransform(scrollYProgress, [0, 0.16, 0.84, 1], [0.82, 1, 1, 0.82]);
  const flowY = useTransform(scrollYProgress, [0, 0.16, 0.84, 1], [18, 0, 0, -18]);

  const sceneStyle = reducedMotion
    ? undefined
    : flow
      ? { opacity: flowOpacity, y: flowY }
      : { opacity, y, x, scale };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`scene scene--${density}${flow ? " scene--flow" : ""}`}
      style={minHeight && !flow ? { minHeight } : undefined}
    >
      <motion.div ref={frameRef} className="scene-frame" style={sceneStyle}>
        {children}
      </motion.div>
    </section>
  );
}
