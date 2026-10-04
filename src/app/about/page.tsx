import type { Metadata } from "next";
import { ExternalLinks } from "@/components/home/anchors";
import RotatingTagline from "@/components/rotating-tagline";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="brand flex-1">
      <section className="relative mx-auto min-h-[100dvh] max-w-[1300px] px-6 pt-10 pb-10 sm:pt-12">
        <ExternalLinks className="mb-8 justify-end pt-2 sm:absolute sm:right-6 sm:top-12 sm:mb-0" />
        <RotatingTagline />
      </section>
    </div>
  );
}
