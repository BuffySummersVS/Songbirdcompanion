import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import kasaImg from "../../../assets/easter-eggs/Kasa.png";

// Approximate travel box, in vw (x) / vh (y) — insets keep the hat's own
// footprint from visually poking past the real screen edge on bounce.
const MIN_X = 6, MAX_X = 94;
const MIN_Y = 8, MAX_Y = 86;

// After a bounce, the axis that hit a wall must reverse (otherwise the hat
// would fly straight through the edge) but gets a randomised new steepness;
// the other axis is fully re-randomised too, so each bounce heads off in a
// genuinely new direction rather than a mechanical mirror reflection.
function randomBounceVelocity(prevVx, prevVy, hitX, hitY) {
  let vx = prevVx;
  let vy = prevVy;

  if (hitX) {
    vx = (prevVx > 0 ? -1 : 1) * (0.4 + Math.random() * 0.8);
    vy = (Math.random() < 0.5 ? -1 : 1) * (0.4 + Math.random() * 0.8);
  }
  if (hitY) {
    vy = (prevVy > 0 ? -1 : 1) * (0.4 + Math.random() * 0.8);
    vx = (Math.random() < 0.5 ? -1 : 1) * (0.4 + Math.random() * 0.8);
  }

  const mag = Math.hypot(vx, vy) || 1;
  return { vx: vx / mag, vy: vy / mag };
}

// Straight-line bounce path: travels in a dead-straight line until it hits
// a screen edge, then heads off in a new random direction (away from that
// edge) for the next straight leg, repeating for `bounces` legs. Waypoints
// carry `t` = cumulative distance travelled so far / total distance, so
// animating on this `t` axis gives constant apparent speed on every leg.
function buildBouncePath({ startX, startY, angleDeg, bounces }) {
  const rad = (angleDeg * Math.PI) / 180;
  let x = startX;
  let y = startY;
  let vx = Math.cos(rad);
  let vy = Math.sin(rad);

  const points = [{ x, y, dist: 0 }];
  let totalDist = 0;

  for (let i = 0; i < bounces; i++) {
    const tx = vx > 0 ? (MAX_X - x) / vx : vx < 0 ? (MIN_X - x) / vx : Infinity;
    const ty = vy > 0 ? (MAX_Y - y) / vy : vy < 0 ? (MIN_Y - y) / vy : Infinity;
    const t = Math.min(tx, ty);
    const nx = x + vx * t;
    const ny = y + vy * t;
    totalDist += Math.hypot(nx - x, ny - y);
    points.push({ x: nx, y: ny, dist: totalDist });

    ({ vx, vy } = randomBounceVelocity(vx, vy, tx <= ty, ty <= tx));
    x = nx;
    y = ny;
  }

  return points.map(p => ({ x: p.x, y: p.y, t: totalDist === 0 ? 0 : p.dist / totalDist }));
}

const TRAVEL_MS = 2600;
const REDUCED_MS = 900;

export default function MizukiKasa({ reducedMotion, onDone }) {
  const [path] = useState(() =>
    buildBouncePath({ startX: 50, startY: 42, angleDeg: Math.random() * 360, bounces: 8 })
  );
  const xKeyframes = useMemo(() => path.map(p => `${p.x}vw`), [path]);
  const yKeyframes = useMemo(() => path.map(p => `${p.y}vh`), [path]);
  const times = useMemo(() => path.map(p => p.t), [path]);
  const rotateKeyframes = useMemo(() => path.map((_, i) => i * 220), [path]);

  useEffect(() => {
    const duration = reducedMotion ? REDUCED_MS : TRAVEL_MS + 200;
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [reducedMotion, onDone]);

  if (reducedMotion) {
    return (
      <div className="egg-fx mzk-fx" aria-hidden="true">
        <motion.div
          className="mzk-fx-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
        />
        <motion.img
          src={kasaImg}
          alt=""
          className="mzk-fx-kasa"
          style={{ left: "42vw", top: "42vh" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
          transition={{ duration: REDUCED_MS / 1000, times: [0, 0.25, 0.7, 1] }}
        />
      </div>
    );
  }

  return (
    <div className="egg-fx mzk-fx" aria-hidden="true">
      <motion.div
        className="mzk-fx-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.5, 0] }}
        transition={{ duration: (TRAVEL_MS + 200) / 1000, times: [0, 0.1, 0.82, 1] }}
      />

      <motion.img
        src={kasaImg}
        alt=""
        className="mzk-fx-kasa"
        initial={{ x: xKeyframes[0], y: yKeyframes[0], rotate: 0, opacity: 0, scale: 0.7 }}
        animate={{
          x: xKeyframes,
          y: yKeyframes,
          rotate: rotateKeyframes,
          opacity: [0, 1, 1, 0],
          scale: [0.7, 1, 1, 0.85],
        }}
        transition={{
          x: { duration: TRAVEL_MS / 1000, times, ease: "linear" },
          y: { duration: TRAVEL_MS / 1000, times, ease: "linear" },
          rotate: { duration: TRAVEL_MS / 1000, ease: "linear" },
          opacity: { duration: TRAVEL_MS / 1000, times: [0, 0.06, 0.8, 1], ease: "linear" },
          scale: { duration: TRAVEL_MS / 1000, times: [0, 0.06, 0.8, 1], ease: "linear" },
        }}
      />
    </div>
  );
}
