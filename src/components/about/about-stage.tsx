"use client";

import { MotionConfig, motion, useReducedMotion, type Transition } from "motion/react";
import { useEffect, useState } from "react";
import AboutIntro from "@/components/about/about-intro";
import {
  COLLAGE_W,
  PHOTO_SLOTS,
  PhotoFill,
} from "@/components/about/photo-collage";
import { ExternalLinks } from "@/components/home/anchors";
import {
  LAYOUT,
  MENU_MORPH,
  STACK_FAN,
  STACK_RETURN,
  STACK_RETURN_DISSOLVE,
} from "@/components/home/motion-tokens";
import {
  FRAME_H,
  MARGIN,
  MAX_CONTENT_W,
  useStage,
} from "@/components/home/work-stage";
import RotatingTagline from "@/components/rotating-tagline";
import { cardSurface, pillClass } from "@/components/ui/brand";

/** Top of the "Out of office" button: same as the homepage's "Selected work" button. */
const BUTTON_TOP = 770;
/** Top of the collapsed collage box, sitting just above the button; its right edge sits on the margin. */
const COLLAGE_TOP = BUTTON_TOP - 430;

/**
 * Expanded "scattered" layout, one entry per photo slot. `x` is the card's
 * center as a fraction of the content width; `y` is its center in stage px.
 * Each card keeps its slot's aspect ratio so it scales uniformly into the stack.
 */
const SCATTER = [
  { x: 0.12, y: 260, width: 300, rotate: -7 },
  { x: 0.42, y: 210, width: 300, rotate: 4 },
  { x: 0.82, y: 250, width: 260, rotate: 9 },
  { x: 0.25, y: 600, width: 220, rotate: 8 },
  { x: 0.55, y: 610, width: 320, rotate: -5 },
];

/** Hover fan offsets: x, y, rotate. */
const FAN = [
  { x: -10, y: -14, rotate: 3 },
  { x: 14, y: -10, rotate: 3 },
  { x: -18, y: 6, rotate: -4 },
  { x: -2, y: 10, rotate: -2 },
  { x: 18, y: 4, rotate: 4 },
];

type Box = { left: number; top: number; width: number; height: number };

function scatterBoxes(frameWidth: number): Box[] {
  const content = frameWidth - MARGIN * 2;
  return SCATTER.map((spot, index) => {
    const slot = PHOTO_SLOTS[index];
    const height = (spot.width * slot.height) / slot.width;
    return {
      left: MARGIN + spot.x * content - spot.width / 2,
      top: spot.y - height / 2,
      width: spot.width,
      height,
    };
  });
}

/** Transform that places a scattered card at its collage slot (transform-only). */
function stackTransform(box: Box, index: number, collageLeft: number, fanned: boolean) {
  const slot = PHOTO_SLOTS[index];
  const scale = slot.width / box.width;
  const fan = fanned ? FAN[index] : { x: 0, y: 0, rotate: 0 };
  return {
    x: collageLeft + slot.left + slot.width / 2 - (box.left + box.width / 2) + fan.x,
    y: COLLAGE_TOP + slot.top + slot.height / 2 - (box.top + box.height / 2) + fan.y,
    scale,
    rotate: slot.rotate + fan.rotate,
  };
}

/**
 * Wide-screen About page, laid out on the same scaled 1440 × 900 stage as the
 * homepage so the tagline and top-right links land exactly where the homepage
 * headline and links sit. The photo collage behaves like the homepage stack:
 * it fans on hover and its button scatters the photos across the page.
 */
export default function AboutStage() {
  const stage = useStage();
  const scale = stage?.scale ?? 1;
  const frameWidth = Math.min(stage?.width ?? 1440, MAX_CONTENT_W + MARGIN * 2);
  const scaledHeight = FRAME_H * scale;
  const collageLeft = frameWidth - MARGIN - COLLAGE_W;
  const boxes = scatterBoxes(frameWidth);
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [hoverStack, setHoverStack] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);
  const [cardMotion, setCardMotion] = useState<"expand" | "collapse" | "fan">(
    "fan"
  );

  const fanned = !expanded && !reduceMotion && (hoverStack || hoverButton);

  function toggle(next = !expanded) {
    setCardMotion(next ? "expand" : "collapse");
    setExpanded(next);
  }

  function setHover(setter: (value: boolean) => void, value: boolean) {
    if (!expanded) setCardMotion("fan");
    setter(value);
  }

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") toggle(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const cardTransition: Transition =
    cardMotion === "expand"
      ? LAYOUT
      : cardMotion === "collapse"
        ? STACK_RETURN
        : STACK_FAN;

  // Text and links step aside while the photos are scattered.
  const fadeOut = {
    initial: false,
    animate: expanded ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 },
    transition: expanded
      ? { duration: 0.15, ease: "easeOut" as const }
      : STACK_RETURN_DISSOLVE,
    inert: expanded,
    "aria-hidden": expanded || undefined,
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="relative hidden h-dvh overflow-x-clip min-[900px]:block"
        style={{ height: stage ? Math.max(stage.viewportHeight, scaledHeight) : undefined }}
      >
        <div
          className="absolute left-0 origin-top-left transition-opacity duration-200"
          style={{
            width: stage?.width ?? "100%",
            height: FRAME_H,
            top: stage ? Math.max(0, (stage.viewportHeight - scaledHeight) / 2) : 0,
            opacity: stage ? 1 : 0,
            transform: `scale(${scale})`,
          }}
        >
          <div className="relative mx-auto h-full" style={{ width: frameWidth }}>
            {/* Same offsets as the homepage headline and links (see WorkStage). */}
            <motion.header {...fadeOut} className="absolute top-[73px] left-[80px]">
              <RotatingTagline className="leading-[1.35]" />
              <AboutIntro className="mt-8" />
            </motion.header>
            <motion.div
              {...fadeOut}
              className="absolute top-[64px] right-[80px] flex h-[54px] items-center"
            >
              <ExternalLinks />
            </motion.div>

            <section id="out-of-office" aria-label="Out of office photos">
              <div
                onMouseEnter={() => setHover(setHoverStack, true)}
                onMouseLeave={() => setHover(setHoverStack, false)}
              >
                {PHOTO_SLOTS.map((slot, index) => {
                  const box = boxes[index];
                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={
                        expanded
                          ? { x: 0, y: 0, scale: 1, rotate: SCATTER[index].rotate }
                          : stackTransform(box, index, collageLeft, fanned)
                      }
                      transition={cardTransition}
                      className="absolute will-change-transform"
                      style={{ ...box, zIndex: index + 1 }}
                    >
                      <div
                        onClick={() => !expanded && toggle(true)}
                        aria-hidden="true"
                        className={`relative h-full w-full overflow-hidden bg-(--placeholder-a) ${cardSurface} ${expanded ? "" : "cursor-pointer"}`}
                      >
                        <PhotoFill slot={slot} sizes={`${Math.round(box.width * 1.35)}px`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <button
                type="button"
                aria-expanded={expanded}
                aria-controls="out-of-office"
                onClick={() => toggle()}
                onMouseEnter={() => setHover(setHoverButton, true)}
                onMouseLeave={() => setHover(setHoverButton, false)}
                className={`${pillClass} absolute z-10 -translate-x-1/2 cursor-pointer px-[22px] py-[11px] text-base leading-[1.25] whitespace-nowrap`}
                style={{ top: BUTTON_TOP, left: collageLeft + COLLAGE_W / 2 }}
              >
                {expanded ? "Back to work" : "Out of office"}
                <motion.svg
                  aria-hidden="true"
                  viewBox="0 0 14 14"
                  width="14"
                  height="14"
                  initial={false}
                  animate={{ rotate: expanded ? 45 : 0 }}
                  transition={MENU_MORPH}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                >
                  <path d="M7 1v12M1 7h12" />
                </motion.svg>
              </button>
            </section>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
