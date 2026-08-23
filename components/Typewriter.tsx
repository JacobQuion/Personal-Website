"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 85;
const DELETE_MS = 40;
const HOLD_MS = 1900;
const PAUSE_MS = 400;

export default function Typewriter({ phrases }: { phrases: string[] }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;

    const current = phrases[index];
    const atEnd = !deleting && text === current;
    const atStart = deleting && text === "";

    const delay = atEnd
      ? HOLD_MS
      : atStart
        ? PAUSE_MS
        : deleting
          ? DELETE_MS
          : TYPE_MS;

    const timer = setTimeout(() => {
      if (atEnd) {
        setDeleting(true);
      } else if (atStart) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases, reduced]);

  const active = reduced ? phrases[0] : phrases[index];

  return (
    <>
      {/* The animated line is decorative; the real text is exposed below. */}
      <span
        aria-hidden
        className="relative inline-block whitespace-nowrap align-bottom"
      >
        {/* Invisible copy of the full phrase reserves exactly the space the
            browser will use — letter-spacing included, no ch-unit guesswork.
            Without it the heading's width would collapse toward the caret and
            drag the surrounding layout with it on every keystroke. */}
        <span className="invisible">{active}</span>
        {/* The typed text is centered inside that reserved box rather than
            pinned to its left edge, so the line grows out from the middle and
            stays centered at every keystroke, not just once a phrase lands. */}
        <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap">
          {reduced ? phrases[0] : text}
          <span className="caret ml-0.5 inline-block w-[0.6ch] bg-accent align-baseline" />
        </span>
      </span>
      <span className="sr-only">{phrases.join(". ")}</span>
    </>
  );
}
