import type { Metadata } from "next";
import AboutIntro from "@/components/about/about-intro";
import AboutStage from "@/components/about/about-stage";
import { ExternalLinks } from "@/components/home/anchors";
import RotatingTagline from "@/components/rotating-tagline";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="brand">
      <AboutStage />
      {/* Narrow screens mirror the homepage's WorkList header. */}
      <div className="px-6 pt-12 pb-16 min-[900px]:hidden">
        <header>
          <ExternalLinks className="mb-10" />
          <RotatingTagline className="text-[28px] leading-[1.2] sm:text-[34px]" />
        </header>
        <AboutIntro className="mt-10" />
      </div>
    </main>
  );
}
