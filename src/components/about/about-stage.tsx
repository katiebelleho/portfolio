"use client";

import AboutIntro from "@/components/about/about-intro";
import { ExternalLinks } from "@/components/home/anchors";
import {
  FRAME_H,
  MARGIN,
  MAX_CONTENT_W,
  useStage,
} from "@/components/home/work-stage";
import RotatingTagline from "@/components/rotating-tagline";

/**
 * Wide-screen About page, laid out on the same scaled 1440 × 900 stage as the
 * homepage so the tagline and top-right links land exactly where the homepage
 * headline and links sit.
 */
export default function AboutStage() {
  const stage = useStage();
  const scale = stage?.scale ?? 1;
  const frameWidth = Math.min(stage?.width ?? 1440, MAX_CONTENT_W + MARGIN * 2);
  const scaledHeight = FRAME_H * scale;

  return (
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
          <header className="absolute top-[73px] left-[80px]">
            <RotatingTagline className="leading-[1.35]" />
            <AboutIntro className="mt-8" />
          </header>
          <div className="absolute top-[64px] right-[80px] flex h-[54px] items-center">
            <ExternalLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
