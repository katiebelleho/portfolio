import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-32 pb-20 sm:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-5xl font-bold tracking-tight text-neutral-900 sm:text-7xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
          {site.tagline}
        </p>
      </div>
      <a
        href="#work"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm font-medium text-neutral-400 transition-colors hover:text-accent"
      >
        <span className="flex flex-col items-center gap-2">
          Scroll to see my work
          <span aria-hidden="true" className="animate-bounce text-lg">
            ↓
          </span>
        </span>
      </a>
    </section>
  );
}
