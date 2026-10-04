import Image from "next/image";
import { cardSurface } from "@/components/ui/brand";

/** Collage box the slots are laid out in (px at the 1440 × 900 stage). */
const BOX_W = 390;
const BOX_H = 450;

type Slot = {
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
  /** Photo URL; until one is set the slot shows a striped placeholder. */
  src?: string;
  alt?: string;
};

/** Listed back to front; positions follow the About page mockup. */
const SLOTS: Slot[] = [
  { left: 60, top: 22, width: 165, height: 150, rotate: 15 },
  { left: 153, top: 107, width: 155, height: 125, rotate: -2 },
  { left: 7, top: 240, width: 150, height: 160, rotate: -12 },
  { left: 115, top: 217, width: 120, height: 150, rotate: -5 },
  { left: 202, top: 220, width: 170, height: 165, rotate: 12 },
];

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/** Fanned stack of travel photos with an "Out of office" caption. */
export default function PhotoCollage({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`relative aspect-[390/450] w-full max-w-[390px] ${className}`}
    >
      {SLOTS.map((slot, index) => (
        <div
          key={index}
          className={`absolute overflow-hidden ${cardSurface}`}
          style={{
            left: pct(slot.left, BOX_W),
            top: pct(slot.top, BOX_H),
            width: pct(slot.width, BOX_W),
            height: pct(slot.height, BOX_H),
            transform: `rotate(${slot.rotate}deg)`,
          }}
        >
          {slot.src ? (
            <Image
              src={slot.src}
              alt={slot.alt ?? ""}
              fill
              sizes="200px"
              className="object-cover"
            />
          ) : (
            <div className="placeholder-stripes h-full w-full" aria-hidden="true" />
          )}
        </div>
      ))}
      <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-(--accent) px-3.5 py-1 font-mono text-[15px] leading-5 whitespace-nowrap text-white shadow-[0_4px_10px_rgba(27,29,46,.18)]">
        Out of office
      </figcaption>
    </figure>
  );
}
