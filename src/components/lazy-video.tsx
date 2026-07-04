"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export default function LazyVideo({ src, poster, className }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad) {
      videoRef.current?.play().catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload={shouldLoad ? "auto" : "none"}
      src={shouldLoad ? src : undefined}
    />
  );
}
