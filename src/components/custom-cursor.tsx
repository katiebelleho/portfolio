"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const tag = tagRef.current;
    if (!cursor || !tag) return;

    if (window.matchMedia("(hover: none)").matches) return;

    const getHoverTarget = (target: EventTarget | null): Element | null =>
      target instanceof Element ? target.closest("[data-cursor-hover]") : null;

    const offsetX = 16;
    const offsetY = 24;
    const edgeMargin = 16;

    const handleMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      cursor.style.opacity = "1";

      const isOverFooter =
        event.target instanceof Element && event.target.closest("footer") !== null;
      cursor.classList.toggle("is-inverted", isOverFooter);
      tag.classList.toggle("is-inverted", isOverFooter);

      const tagWidth = tag.offsetWidth;
      const overflowsRight = x + offsetX + tagWidth > window.innerWidth - edgeMargin;
      const tagX = overflowsRight ? x - offsetX - tagWidth : x + offsetX;
      tag.style.transform = `translate(${tagX}px, ${y + offsetY}px)`;
    };
    const handleLeaveWindow = () => {
      cursor.style.opacity = "0";
      tag.classList.remove("is-hovering");
    };
    const handleOver = (event: MouseEvent) => {
      const target = getHoverTarget(event.target);
      if (!target) return;
      tag.textContent = target.getAttribute("data-cursor-label") || "View";
      tag.classList.add("is-hovering");
    };
    const handleOut = (event: MouseEvent) => {
      if (getHoverTarget(event.target)) tag.classList.remove("is-hovering");
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
    <>
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div ref={tagRef} className="custom-cursor-tag" aria-hidden="true" />
    </>
  );
}
