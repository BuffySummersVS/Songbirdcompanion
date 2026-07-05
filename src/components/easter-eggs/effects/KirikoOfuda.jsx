import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ofudaImg from "../../../assets/easter-eggs/kiriko-ofuda.png";

function buildOfuda(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 4 + ((i * 37) % 92),
    delay: (i % 7) * 0.16,
    duration: 2.1 + ((i * 13) % 9) / 10,
    drift: ((i % 5) - 2) * 10,
    rotate: ((i % 2 === 0) ? 1 : -1) * (10 + (i % 4) * 6),
    scale: 0.7 + ((i * 7) % 5) / 12,
  }));
}

export default function KirikoOfuda({ reducedMotion, onDone }) {
  const particles = useMemo(() => buildOfuda(reducedMotion ? 4 : 8), [reducedMotion]);
  const total = reducedMotion ? 1400 : 3200;

  useEffect(() => {
    const t = setTimeout(onDone, total);
    return () => clearTimeout(t);
  }, [total, onDone]);

  return (
    <div className="egg-fx kiriko-fx" aria-hidden="true">
      {particles.map(p => (
        <motion.img
          key={p.id}
          src={ofudaImg}
          alt=""
          className="kiriko-fx-ofuda"
          style={{ left: `${p.left}%`, scale: p.scale }}
          initial={{ y: "-12vh", opacity: 0, rotate: 0 }}
          animate={
            reducedMotion
              ? { opacity: [0, 0.9, 0.9, 0], y: ["-4vh", "6vh"] }
              : { y: ["-12vh", "112vh"], x: [0, `${p.drift}vw`], opacity: [0, 1, 1, 0], rotate: [0, p.rotate, p.rotate * 1.6] }
          }
          transition={{
            duration: reducedMotion ? 1.2 : p.duration,
            delay: reducedMotion ? p.delay * 0.5 : p.delay,
            ease: reducedMotion ? "easeInOut" : "easeIn",
          }}
        />
      ))}
    </div>
  );
}
