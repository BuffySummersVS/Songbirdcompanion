import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SPIKES_PER_EDGE = 6;

// Evenly-spaced spikes along one edge, with a small stagger so the whole
// edge doesn't burst in perfectly in sync — reads more like a jagged wall
// erupting than a single uniform slab. Width (the footprint along the edge)
// and reach (how far it juts into the screen) both vary per spike, derived
// deterministically off `i` so the wall reads as a jagged, irregular
// crystal formation rather than a row of identical teeth.
function buildEdgeSpikes(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    pos: ((i + 0.5) / count) * 100,
    delay: (i % 3) * 0.05,
    crossSize: 22 + ((i * 7) % 5) * 5,   // 22-42px — footprint along the edge
    reachSize: 100 + ((i * 11) % 6) * 16, // 100-180px — how far it juts inward
  }));
}

const TOP_SPIKES = buildEdgeSpikes(SPIKES_PER_EDGE);
const BOTTOM_SPIKES = buildEdgeSpikes(SPIKES_PER_EDGE);
const LEFT_SPIKES = buildEdgeSpikes(SPIKES_PER_EDGE);
const RIGHT_SPIKES = buildEdgeSpikes(SPIKES_PER_EDGE);

const BURST_AT = 0.3;
const BURST_DUR = 0.5;
const HOLD = 0.4;
const RETRACT_DUR = 0.55;
const RETRACT_AT = BURST_AT + BURST_DUR + HOLD; // 1.2
const TOTAL = RETRACT_AT + RETRACT_DUR + 0.35; // ~2.1

const REDUCED_MS = 900;

// `positionedAlong` is the edge axis the spike is strung out along ("x" for
// the top/bottom edges, positioned via `left`; "y" for left/right, via
// `top`) — the spike itself then grows/retracts along the OTHER axis
// (scaleY for top/bottom spikes pointing up/down, scaleX for left/right
// spikes pointing left/right). `crossSize`/`reachSize` map to width/height
// depending on that same orientation.
function Spike({ className, pos, positionedAlong, delay, crossSize, reachSize }) {
  const scaleProp = positionedAlong === "x" ? "scaleY" : "scaleX";
  const sizeStyle = positionedAlong === "x"
    ? { left: `${pos}%`, width: crossSize, height: reachSize, marginLeft: -crossSize / 2 }
    : { top: `${pos}%`, height: crossSize, width: reachSize, marginTop: -crossSize / 2 };

  return (
    <motion.div
      className={className}
      style={sizeStyle}
      initial={{ [scaleProp]: 0, opacity: 0 }}
      animate={{
        [scaleProp]: [0, 1, 1, 0],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: TOTAL,
        delay,
        times: [0, BURST_AT / TOTAL + 0.02, RETRACT_AT / TOTAL, 1],
      }}
    />
  );
}

export default function HazardCrystals({ reducedMotion, onDone }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) {
      const t = setTimeout(onDone, REDUCED_MS);
      return () => clearTimeout(t);
    }
    const node = rootRef.current;
    const shakeTimer = setTimeout(() => {
      node?.classList.add("egg-shake-soft");
      setTimeout(() => node?.classList.remove("egg-shake-soft"), 400);
    }, 150);
    const doneTimer = setTimeout(onDone, TOTAL * 1000);
    return () => {
      clearTimeout(shakeTimer);
      clearTimeout(doneTimer);
      node?.classList.remove("egg-shake-soft");
    };
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx hzd-fx" aria-hidden="true">
        <motion.div
          className="hzd-fx-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
        />
      </div>
    );
  }

  return (
    <div className="egg-fx hzd-fx" aria-hidden="true" ref={rootRef}>
      <motion.div
        className="hzd-fx-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: TOTAL, times: [0, 0.15, RETRACT_AT / TOTAL, 1] }}
      />

      {TOP_SPIKES.map(s => (
        <Spike key={`t-${s.id}`} className="hzd-fx-spike hzd-fx-spike-top" pos={s.pos} positionedAlong="x" delay={s.delay} crossSize={s.crossSize} reachSize={s.reachSize} />
      ))}
      {BOTTOM_SPIKES.map(s => (
        <Spike key={`b-${s.id}`} className="hzd-fx-spike hzd-fx-spike-bottom" pos={s.pos} positionedAlong="x" delay={s.delay} crossSize={s.crossSize} reachSize={s.reachSize} />
      ))}
      {LEFT_SPIKES.map(s => (
        <Spike key={`l-${s.id}`} className="hzd-fx-spike hzd-fx-spike-left" pos={s.pos} positionedAlong="y" delay={s.delay} crossSize={s.crossSize} reachSize={s.reachSize} />
      ))}
      {RIGHT_SPIKES.map(s => (
        <Spike key={`r-${s.id}`} className="hzd-fx-spike hzd-fx-spike-right" pos={s.pos} positionedAlong="y" delay={s.delay} crossSize={s.crossSize} reachSize={s.reachSize} />
      ))}
    </div>
  );
}
