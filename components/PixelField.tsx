/**
 * Animated pixel-block background.
 *
 * A sparse grid of square blocks with bright bands sweeping diagonally across
 * it. The bands are emergent rather than drawn: every block runs the same
 * keyframe, and its animation-delay is derived from its grid position, so the
 * wavefronts fall out of the arithmetic. Delays are negative, which starts each
 * block mid-cycle — the field is already lit on first paint instead of fading
 * up from black. Pure CSS, no JS at runtime, and it holds still under
 * prefers-reduced-motion.
 */

const COLS = 38;
const ROWS = 14;
const CELL = 16;
/** Block is smaller than its cell; the remainder is the gutter that makes the
    grid read as discrete pixels rather than a solid sheet. */
const BLOCK = 11;
const DURATION = 12;
/** Wavefronts crossing the grid simultaneously. */
const BANDS = 3;

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Block = {
  col: number;
  row: number;
  delay: number;
  dim: number;
  peak: number;
  pale: boolean;
};

function field(seed: number, density: number): Block[] {
  const rand = mulberry32(seed);
  const blocks: Block[] = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (rand() > density) continue;

      // Position along the diagonal, wrapped so BANDS wavefronts cross the
      // field at once — a single band spends most of its cycle offscreen and
      // leaves the field looking static. The jitter keeps each wavefront from
      // looking like a ruler edge.
      const progress = ((col + row) / (COLS + ROWS)) * BANDS;
      const delay = -((progress % 1) * DURATION + rand() * 0.25);

      blocks.push({
        col,
        row,
        delay,
        dim: 0.1 + rand() * 0.16,
        peak: 0.7 + rand() * 0.3,
        // A few near-white blocks per sweep, so the bands have some glint.
        pale: rand() < 0.09,
      });
    }
  }

  return blocks;
}

const blocks = field(20250821, 0.42);

export default function PixelField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        viewBox={`0 0 ${COLS * CELL} ${ROWS * CELL}`}
        // slice, not stretch: blocks have to stay square to read as pixels.
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {blocks.map((block) => (
          <rect
            key={`${block.col}-${block.row}`}
            x={block.col * CELL}
            y={block.row * CELL}
            width={BLOCK}
            height={BLOCK}
            fill={block.pale ? "var(--color-fg)" : "var(--color-accent)"}
            className="pixel"
            style={
              {
                // Also the resting opacity, so the field stays visible when
                // reduced motion switches the animation off.
                opacity: block.dim,
                animationDuration: `${DURATION}s`,
                animationDelay: `${block.delay.toFixed(2)}s`,
                "--dim": block.dim,
                "--peak": block.peak,
              } as React.CSSProperties
            }
          />
        ))}
      </svg>

      {/* Fade the field out toward the middle and bottom so text stays legible. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_54%_58%_at_50%_50%,var(--color-bg)_14%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
