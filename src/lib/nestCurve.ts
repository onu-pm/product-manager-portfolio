import { CatmullRomCurve3, Vector3 } from "three";

/**
 * Procedural path for the weaver bird's nest: a hanging gourd-shaped weave
 * that spirals down from a wide entrance ring, bulges into a round chamber,
 * then tapers into a narrow tail tunnel. Baya weaver nests are built exactly
 * this way, top-down, one woven strand at a time, which is what lets the
 * "reveal as you scroll" trick read as the bird actually weaving it.
 */
export const NEST_TOTAL_POINTS = 240;
const TURNS = 7.5;
const TOTAL_HEIGHT = 3.4;

function radiusAt(t: number) {
  // Wide collar at the top, swells into the chamber around t=0.45, then
  // tapers hard into the narrow tail tunnel for the last 25%.
  const collar = 0.62;
  const bulge = 0.95;
  if (t < 0.12) {
    return collar + (bulge - collar) * (t / 0.12);
  }
  if (t < 0.55) {
    const local = (t - 0.12) / 0.43;
    return bulge - 0.08 * Math.sin(local * Math.PI);
  }
  const local = (t - 0.55) / 0.45;
  return bulge * (1 - local) * (1 - local) + 0.06;
}

export function buildNestPoints(count = NEST_TOTAL_POINTS): Vector3[] {
  const points: Vector3[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const angle = t * TURNS * Math.PI * 2;
    const r = radiusAt(t);
    const y = 1.6 - t * TOTAL_HEIGHT;
    points.push(new Vector3(Math.cos(angle) * r, y, Math.sin(angle) * r));
  }
  return points;
}

export function buildNestCurve(count = NEST_TOTAL_POINTS) {
  return new CatmullRomCurve3(buildNestPoints(count), false, "catmullrom", 0.4);
}
