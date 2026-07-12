// Shared straight-line "bounce off the screen edges" path generator, used
// by any effect where something flies around and rebounds off the viewport
// (Mizuki's kasa, Moira's biotic orbs, ...). Coordinates are in vw (x) /
// vh (y) percentages.

const DEFAULT_BOUNDS = { minX: 6, maxX: 94, minY: 8, maxY: 86 };

// After a bounce, the axis that hit a wall must reverse (otherwise the
// object would fly straight through the edge) but gets a randomised new
// steepness; the other axis is fully re-randomised too, so each bounce
// heads off in a genuinely new direction rather than a mechanical mirror
// reflection.
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
export function buildBouncePath({ startX, startY, angleDeg, bounces, bounds = DEFAULT_BOUNDS }) {
  const { minX, maxX, minY, maxY } = bounds;
  const rad = (angleDeg * Math.PI) / 180;
  let x = startX;
  let y = startY;
  let vx = Math.cos(rad);
  let vy = Math.sin(rad);

  const points = [{ x, y, dist: 0 }];
  let totalDist = 0;

  for (let i = 0; i < bounces; i++) {
    const tx = vx > 0 ? (maxX - x) / vx : vx < 0 ? (minX - x) / vx : Infinity;
    const ty = vy > 0 ? (maxY - y) / vy : vy < 0 ? (minY - y) / vy : Infinity;
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
