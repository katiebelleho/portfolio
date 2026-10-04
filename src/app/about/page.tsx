import type { Metadata } from "next";
import NavLinks from "@/components/nav-links";
import RotatingTagline from "@/components/rotating-tagline";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex-1 bg-[#FBFAF7]">
      <section className="relative mx-auto min-h-[100dvh] max-w-[1300px] px-6 pt-10 pb-10 sm:pt-12">
        <NavLinks className="mb-8 flex shrink-0 flex-wrap items-center justify-end gap-x-4 gap-y-1 pt-2 sm:absolute sm:right-6 sm:top-12 sm:mb-0 sm:gap-x-8" />
        <RotatingTagline />
      </section>
    </div>
  );
}
