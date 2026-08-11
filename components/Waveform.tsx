/**
 * Animated EEG-style background.
 *
 * Each trace is a sum of sine components whose frequencies are whole numbers
 * of cycles per tile. That makes the curve identical at x=0 and x=TILE, so two
 * tiles laid end to end scroll forever with no seam. Pure CSS animation — no
 * canvas, no JS at runtime, and it stops under prefers-reduced-motion.
 */

const TILE = 1000;
const HEIGHT = 320;

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** One tile of trace, as an SVG path string starting at x=0. */
function trace(seed: number, amplitude: number, samples = 260): string {
  const rand = mulberry32(seed);

  // Integer cycles-per-tile keeps the ends aligned.
  const parts = [1, 2, 3, 5, 8, 13, 21].map((freq, i) => ({
    freq,
    amp: (amplitude / (i * 0.75 + 1)) * (0.6 + rand() * 0.7),
    phase: rand() * Math.PI * 2,
  }));

  // Slow envelope so the trace breathes between calm and busy stretches.
  const envFreq = 1 + Math.floor(rand() * 2);
  const envPhase = rand() * Math.PI * 2;

  const mid = HEIGHT / 2;
  let d = "";

  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const angle = t * Math.PI * 2;

    let y = 0;
    for (const p of parts) y += p.amp * Math.sin(angle * p.freq + p.phase);

    const envelope = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(angle * envFreq + envPhase));
    const x = t * TILE;

    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${(mid + y * envelope).toFixed(1)}`;
  }

  return d;
}

const layers = [
  { seed: 7, amplitude: 78, opacity: 0.5, duration: "38s", width: 1.4 },
  { seed: 42, amplitude: 54, opacity: 0.3, duration: "56s", width: 1.1 },
  // Amplitude capped so the trace stays inside the viewBox and never clips flat.
  { seed: 1337, amplitude: 82, opacity: 0.16, duration: "82s", width: 1 },
];

export default function Waveform() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {layers.map((layer) => {
        const d = trace(layer.seed, layer.amplitude);
        return (
          <svg
            key={layer.seed}
            // Two tiles wide; the drift keyframe shifts by exactly one tile.
            viewBox={`0 0 ${TILE * 2} ${HEIGHT}`}
            preserveAspectRatio="none"
            className="drift absolute inset-y-0 left-0 h-full w-[200%]"
            style={{ animationDuration: layer.duration, opacity: layer.opacity }}
          >
            <g
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth={layer.width}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            >
              <path d={d} />
              <path d={d} transform={`translate(${TILE},0)`} />
            </g>
          </svg>
        );
      })}

      {/* Fade the traces out toward the edges so text stays readable. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,var(--color-bg)_25%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
