"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";
import { useEffect, useState, type MouseEvent } from "react";
import { ExternalLinks } from "@/components/home/anchors";
import Headline from "@/components/home/headline";
import {
  LAYOUT,
  MENU_MORPH,
  STACK_FAN,
  STACK_RETURN,
  STACK_RETURN_DISSOLVE,
} from "@/components/home/motion-tokens";
import { homeWork, type HomeWorkItem } from "@/lib/home-work";
import { cardSurface, Kicker, pillClass } from "@/components/ui/brand";

/*
 * Geometry is in stage px, designed on a 1440 × 900 frame. The stage is always
 * 900 tall and scaled to the viewport height; its width follows the viewport, so
 * the expanded grid stretches or shrinks horizontally instead of leaving empty
 * space. The collapsed stack, headline and button keep their fixed positions.
 */
const FRAME_H = 900;
const MIN_SCALE = 0.75;
const MAX_SCALE = 1.35;
/** Narrowest stage width before the whole stage scales down instead (≈ the 900px mobile switch). */
const MIN_STAGE_W = 1100;

const MARGIN = 80;
const GRID_TOP = 104;
/** Grid content width the spec was drawn at (1440 − 2 × 80). */
const DESIGN_CONTENT_W = 1280;
/** Widest the content may get; beyond this the composition centers in the stage. */
const MAX_CONTENT_W = 1400;

type Box = { left: number; top: number; width: number; height: number };

/**
 * Expanded boxes: featured + 2×2 grid. Column widths and gutters keep the spec's
 * 560 : 60 : 300 : 60 : 300 proportions across the available width; heights keep
 * each card's aspect ratio. At a 1440-wide stage this is exactly the spec.
 */
function layoutGrid(frameWidth: number): Box[] {
  const content = frameWidth - MARGIN * 2;
  const unit = content / DESIGN_CONTENT_W;
  const featuredW = 560 * unit;
  const gutter = 60 * unit;
  const colW = 300 * unit;
  const colH = (colW * 2) / 3;
  // Room for two-to-three-line captions between rows; a little more when columns get narrow.
  const rowGap = 96 + 16 * Math.min(Math.max((DESIGN_CONTENT_W - content) / 340, 0), 1);
  const col1 = MARGIN + featuredW + gutter;
  const col2 = col1 + colW + gutter;
  const row2 = GRID_TOP + colH + rowGap;
  return [
    { left: MARGIN, top: GRID_TOP, width: featuredW, height: featuredW * 0.75 },
    { left: col1, top: GRID_TOP, width: colW, height: colH },
    { left: col2, top: GRID_TOP, width: colW, height: colH },
    { left: col1, top: row2, width: colW, height: colH },
    { left: col2, top: row2, width: colW, height: colH },
  ];
}

/** Collapsed stack: card width shrinks, height follows the expanded aspect ratio. */
const STACK = [
  { left: 80, top: 520, width: 245, rotate: -5 },
  { left: 162, top: 505, width: 225, rotate: -1 },
  { left: 227, top: 480, width: 250, rotate: 4 },
  { left: 237, top: 476, width: 240, rotate: 7 },
  { left: 227, top: 472, width: 240, rotate: 9 },
];

/** Hover fan offsets: x, y, rotate. */
const FAN = [
  { x: -16, y: -8, rotate: -3 },
  { x: 0, y: -16, rotate: 0 },
  { x: 18, y: -10, rotate: 3 },
  { x: 26, y: -6, rotate: 5 },
  { x: 30, y: -2, rotate: 7 },
];

const CAPTION_GAP = 16;
const GRID_CAPTION_GAP = 12;

/** Transform that places an expanded box at its stack position (transform-only, no reflow). */
function stackTransform(box: Box, index: number, fanned: boolean) {
  const stack = STACK[index];
  const scale = stack.width / box.width;
  const stackHeight = box.height * scale;
  const fan = fanned ? FAN[index] : { x: 0, y: 0, rotate: 0 };
  return {
    x: stack.left + stack.width / 2 - (box.left + box.width / 2) + fan.x,
    y: stack.top + stackHeight / 2 - (box.top + box.height / 2) + fan.y,
    scale,
    rotate: stack.rotate + fan.rotate,
  };
}

const reveal = (index: number): Variants => ({
  hidden: { opacity: 0, y: 6, transition: { duration: 0.12, ease: "easeOut" } },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: 0.28 + index * 0.03, ease: "easeOut" },
  },
});

type Stage = { scale: number; width: number; viewportHeight: number };

/**
 * Scale follows viewport height (clamped to [MIN_SCALE, MAX_SCALE]); stage width
 * is whatever fills the viewport at that scale. If that would be narrower than
 * MIN_STAGE_W, the scale drops further so the grid never gets cramped.
 */
function useStage() {
  const [stage, setStage] = useState<Stage | null>(null);

  useEffect(() => {
    const update = () => {
      // clientWidth/Height exclude scrollbars, so the stage never forces a horizontal one.
      const { clientWidth, clientHeight } = document.documentElement;
      const byHeight = Math.min(Math.max(clientHeight / FRAME_H, MIN_SCALE), MAX_SCALE);
      const scale = Math.min(byHeight, clientWidth / MIN_STAGE_W);
      setStage({ scale, width: clientWidth / scale, viewportHeight: clientHeight });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return stage;
}

function Thumbnail({ item, width }: { item: HomeWorkItem; width: number }) {
  if (!item.image) return <div className="placeholder-stripes h-full w-full" />;
  return (
    <Image
      src={item.image}
      alt={item.alt ?? ""}
      fill
      loading="eager"
      sizes={`${Math.round(width * MAX_SCALE)}px`}
      className="object-cover"
    />
  );
}

export default function WorkStage() {
  const stage = useStage();
  const scale = stage?.scale ?? 1;
  // Centered frame inside the stage that all positions are measured from.
  const frameWidth = Math.min(stage?.width ?? 1440, MAX_CONTENT_W + MARGIN * 2);
  const grid = layoutGrid(frameWidth);
  const scaledHeight = FRAME_H * scale;
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [hoverStack, setHoverStack] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);
  // Which change the cards are animating for, so each gets its own spring.
  const [cardMotion, setCardMotion] = useState<"expand" | "collapse" | "fan">(
    "fan"
  );

  const fanned = !expanded && !reduceMotion && (hoverStack || hoverButton);
  const items = homeWork.slice(0, grid.length);

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

  function onCardClick(event: MouseEvent) {
    if (expanded) return;
    event.preventDefault();
    toggle(true);
  }

  return (
    <MotionConfig reducedMotion="user">
      {/* Viewport-sized box holding the scaled stage. It grows if the scaled stage is
          taller than the viewport, so nothing is cut off vertically. */}
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
            <motion.header
              initial={false}
              animate={expanded ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
              transition={
                expanded
                  ? { duration: 0.15, ease: "easeOut" }
                  : STACK_RETURN_DISSOLVE
              }
              inert={expanded}
              aria-hidden={expanded || undefined}
              className="absolute top-[73px] left-[80px]"
            >
              <Headline interactive={!expanded} className="leading-[1.35]" />
            </motion.header>

            {/* Cap height lines up with the headline's first line (the headline
                sits at 73 so its cap tops match these links). Hidden with the
                header while the grid is expanded. */}
            <motion.div
              initial={false}
              animate={expanded ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
              transition={
                expanded
                  ? { duration: 0.15, ease: "easeOut" }
                  : STACK_RETURN_DISSOLVE
              }
              inert={expanded}
              aria-hidden={expanded || undefined}
              className="absolute top-[64px] right-[80px] flex h-[54px] items-center"
            >
              <ExternalLinks />
            </motion.div>

            <section id="work" aria-label="Selected work">
              <motion.h2
                initial={false}
                animate={expanded ? "shown" : "hidden"}
                variants={reveal(0)}
                aria-hidden={!expanded || undefined}
                className="absolute top-[64px] left-[80px] font-mono text-xs font-bold uppercase text-(--accent)"
              >
                Design problems I&rsquo;ve solved
              </motion.h2>

              <div
                onMouseEnter={() => setHover(setHoverStack, true)}
                onMouseLeave={() => setHover(setHoverStack, false)}
              >
                {items.map((item, index) => {
                  const box = grid[index];
                  const href = item.slug ? `/projects/${item.slug}` : undefined;
                  const cardClass = `block h-full w-full overflow-hidden bg-(--placeholder-a) ${cardSurface} ${expanded && !href ? "" : "cursor-pointer"}`;

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={expanded ? { x: 0, y: 0, scale: 1, rotate: 0 } : stackTransform(box, index, fanned)}
                      transition={cardTransition}
                      className="absolute will-change-transform"
                      style={{
                        left: box.left,
                        top: box.top,
                        width: box.width,
                        height: box.height,
                        zIndex: grid.length - index,
                      }}
                    >
                      {href ? (
                        <Link
                          href={href}
                          onClick={onCardClick}
                          tabIndex={-1}
                          aria-hidden="true"
                          className={`relative ${cardClass}`}
                        >
                          <Thumbnail item={item} width={box.width} />
                        </Link>
                      ) : (
                        <div
                          onClick={onCardClick}
                          aria-hidden="true"
                          className={`relative ${cardClass}`}
                        >
                          <Thumbnail item={item} width={box.width} />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <ul inert={!expanded}>
                {items.map((item, index) => {
                  const box = grid[index];
                  const featured = index === 0;
                  const href = item.slug ? `/projects/${item.slug}` : undefined;
                  const title = (
                    <span
                      className={`mt-1.5 block font-semibold leading-[1.3] tracking-[-0.01em] text-(--ink) ${featured ? "text-[22px]" : "text-lg"}`}
                    >
                      {item.title}
                    </span>
                  );

                  return (
                    <motion.li
                      key={index}
                      initial={false}
                      animate={expanded ? "shown" : "hidden"}
                      variants={reveal(index)}
                      className={`absolute ${expanded ? "" : "pointer-events-none"}`}
                      style={{
                        left: box.left,
                        top:
                          box.top +
                          box.height +
                          (featured ? CAPTION_GAP : GRID_CAPTION_GAP),
                        width: box.width,
                      }}
                    >
                      {href ? (
                        <Link
                          href={href}
                          className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
                        >
                          <Kicker company={item.company} date={item.date} />
                          <span className="group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                            {title}
                          </span>
                        </Link>
                      ) : (
                        <div>
                          <Kicker company={item.company} date={item.date} />
                          {title}
                        </div>
                      )}
                    </motion.li>
                  );
                })}
              </ul>

              <button
                type="button"
                aria-expanded={expanded}
                aria-controls="work"
                onClick={() => toggle()}
                onMouseEnter={() => setHover(setHoverButton, true)}
                onMouseLeave={() => setHover(setHoverButton, false)}
                className={`${pillClass} absolute top-[770px] left-[80px] z-10 cursor-pointer px-[22px] py-[11px] text-base leading-[1.25]`}
              >
                {expanded ? "Collapse" : "Selected work"}
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
