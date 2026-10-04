"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const ROLES = [
  "Product designer",
  "Coffee drinker",
  "World wanderer",
  "Runner",
  "Cat lover",
  "Overthinker",
];

const HOLD_MS = 1100;
const SLIDE_MS = 400;
/** Pause before the first slide so the loop kicks off almost immediately. */
const START_MS = 500;

/**
 * Size and line-height come from `className`; each role occupies exactly one
 * line box, so the stack steps by `1lh`.
 */
export default function RotatingTagline({ className = "" }: { className?: string }) {
  // `index` runs 0..ROLES.length; the last slot is a copy of the first role so
  // the wrap-around slides forward, then snaps back to 0 with no transition.
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [widths, setWidths] = useState<number[]>([]);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    function measure() {
      setWidths(measureRefs.current.map((el) => el?.offsetWidth ?? 0));
    }
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    function advance() {
      setAnimate(true);
      // If a transitionend was missed (e.g. background tab), recover by
      // advancing from the start instead of sliding past the copy.
      setIndex((i) => (i >= ROLES.length ? 1 : i + 1));
    }
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const startId = setTimeout(() => {
      advance();
      intervalId = setInterval(advance, HOLD_MS + SLIDE_MS);
    }, START_MS);
    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, []);

  function handleTransitionEnd(event: React.TransitionEvent) {
    if (event.propertyName !== "transform") return;
    if (index === ROLES.length) {
      setAnimate(false);
      setIndex(0);
    }
  }

  const width = widths[index % ROLES.length];
  const transition = animate
    ? `transform ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.35, 1), width ${SLIDE_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
    : "none";

  return (
    <h1
      aria-label={`I’m ${site.name}, ${ROLES[0]}`}
      className={`text-[40px] font-medium tracking-[-0.03em] text-(--ink) ${className}`}
    >
      <span aria-hidden="true">I&rsquo;m {site.name}, </span>
      <span
        aria-hidden="true"
        className="relative inline-block whitespace-nowrap align-top"
        style={{
          height: "1lh",
          width: width ? `${width}px` : undefined,
          transition,
        }}
      >
        <span className="absolute -left-1 -right-3 bottom-[0.18em] h-[0.5em] bg-[#F5DD8C]" />
        <span className="relative block h-full overflow-hidden">
          <span
            className="block"
            style={{
              transform: `translateY(calc(${-index} * 1lh))`,
              transition,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {[...ROLES, ROLES[0]].map((role, i) => (
              <span
                key={i}
                className="block"
                style={{ height: "1lh" }}
              >
                {role}
              </span>
            ))}
          </span>
        </span>
        {/* Off-screen copies used only to measure each role's width. */}
        <span className="invisible absolute left-0 top-0 h-0 w-max overflow-hidden">
          {ROLES.map((role, i) => (
            <span
              key={role}
              ref={(el) => {
                measureRefs.current[i] = el;
              }}
              className="inline-block whitespace-nowrap"
            >
              {role}
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}
