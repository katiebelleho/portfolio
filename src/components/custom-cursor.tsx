"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (window.matchMedia("(hover: none)").matches) return;

    const isHoverTarget = (target: EventTarget | null) =>
      target instanceof Element ? target.closest("[data-cursor-hover]") : null;

    const handleMove = (event: MouseEvent) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      cursor.style.opacity = "1";
    };
    const handleLeaveWindow = () => {
      cursor.style.opacity = "0";
    };
    const handleOver = (event: MouseEvent) => {
      if (isHoverTarget(event.target)) cursor.classList.add("is-hovering");
    };
    const handleOut = (event: MouseEvent) => {
      if (isHoverTarget(event.target)) cursor.classList.remove("is-hovering");
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor-label">VIEW</span>
    </div>
  );
}
