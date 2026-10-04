"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useState } from "react";
import { site } from "@/lib/site";
import { MENU_MORPH } from "@/components/home/motion-tokens";

const RESTING_TILT = 16;

const highlight: Variants = {
  rest: { scaleX: 0, transition: MENU_MORPH },
  active: { scaleX: 1, transition: MENU_MORPH },
};

const handRise: Variants = {
  rest: { y: 50, rotate: 34, transition: MENU_MORPH },
  active: { y: 0, rotate: RESTING_TILT, transition: { ...MENU_MORPH, delay: 0.06 } },
};

const handWave: Variants = {
  rest: { rotate: 0, transition: { duration: 0.15 } },
  active: {
    rotate: [0, 16, -8, 14, -4, 0],
    transition: { duration: 1.1, delay: 0.32, ease: "easeInOut" },
  },
};

const label: Variants = {
  rest: { opacity: 0, y: 6, transition: { duration: 0.15, ease: "easeOut" } },
  active: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: 0.22, ease: "easeOut" },
  },
};

/** Line-art waving hand (paths from Lucide's "hand" icon, ISC) over a white silhouette. */
function WavingHand() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="38"
      height="38"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g fill="#fff" stroke="none">
        <rect x="6" y="4" width="4" height="12" rx="2" />
        <rect x="10" y="2" width="4" height="11" rx="2" />
        <rect x="14" y="4" width="4" height="10" rx="2" />
        <rect x="18" y="6" width="4" height="10" rx="2" />
        <path d="M6 10h16v4a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15z" />
      </g>
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

/**
 * "Katie Ho" in the headline: links to the About page. On hover/focus-visible a
 * highlighter sweeps in (the name turns ink and drops its dotted underline), a
 * hand waves from behind the "o", and an "About me" label fades in beside it.
 */
export default function NameLink({ disabled = false }: { disabled?: boolean }) {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const active = !disabled && (hovered || focused);
  const state = active ? "active" : "rest";

  return (
    <Link
      href={site.aboutUrl}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(event) => setFocused(event.currentTarget.matches(":focus-visible"))}
      onBlur={() => setFocused(false)}
      className={`relative isolate inline-block whitespace-nowrap rounded-sm underline decoration-dotted decoration-2 underline-offset-[7px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent) ${active ? "text-(--ink) decoration-transparent" : "text-(--accent)"}`}
    >
      <motion.span
        aria-hidden="true"
        initial={false}
        animate={state}
        variants={highlight}
        className="absolute inset-x-[-0.06em] bottom-[0.24em] -z-20 h-[0.56em] origin-left bg-(--highlight)"
      />
      {/* Layering inside the isolated link: highlight (-z-20), then the hand
          (-z-10), then the letters, so the hand peeks out from behind "Ho". */}
      Katie H
      <span className="relative">
        o
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[0.4em] left-[calc(50%+0.34em)] -z-10 h-[64px] w-[64px] -translate-x-1/2 overflow-hidden"
        >
          <motion.span
            initial={false}
            animate={state}
            variants={handRise}
            className="absolute bottom-[0.24em] left-1/2 -ml-[19px] block origin-bottom"
          >
            <motion.span
              initial={false}
              animate={reduceMotion ? "rest" : state}
              variants={handWave}
              className="block origin-[50%_90%]"
            >
              <WavingHand />
            </motion.span>
          </motion.span>
        </span>
        {/* Up and to the right of the settled hand. */}
        <motion.span
          aria-hidden="true"
          initial={false}
          animate={state}
          variants={label}
          className="pointer-events-none absolute bottom-[calc(0.64em+56px)] left-[calc(50%+0.34em+22px)] text-[13px] leading-[1.4] font-medium tracking-normal whitespace-nowrap text-(--ink)"
        >
          About me
        </motion.span>
      </span>
    </Link>
  );
}
