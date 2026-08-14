"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Card description that clamps on phones and expands in place.
 *
 * At sm and up the text is never clamped and the toggle is hidden, so this
 * behaves exactly like the plain paragraph it replaced.
 */
export default function ProjectDescription({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);

  // Whether the text overflows depends on the rendered width, so measure it
  // rather than guessing from character count. Once expanded, keep the toggle
  // around — it becomes the way back to "Show less".
  useEffect(() => {
    const el = ref.current;
    if (!el || expanded) return;

    const check = () => setTruncated(el.scrollHeight > el.clientHeight + 1);
    check();

    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <>
      <p
        ref={ref}
        className={`mt-3 text-[13px] leading-6 text-muted sm:line-clamp-none ${
          expanded ? "line-clamp-none" : "line-clamp-4"
        }`}
      >
        {text}
      </p>

      {truncated && (
        <button
          type="button"
          onClick={() => setExpanded((open) => !open)}
          aria-expanded={expanded}
          className="mt-1 self-start py-1 text-[13px] text-accent transition-colors hover:text-fg sm:hidden"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </>
  );
}
