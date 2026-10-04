import Image from "next/image";
import { cardSurface } from "@/components/ui/brand";

/** Collage box the slots are laid out in (px at the 1440 × 900 stage). */
export const COLLAGE_W = 390;
export const COLLAGE_H = 450;

export type PhotoSlot = {
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
export const PHOTO_SLOTS: PhotoSlot[] = [
  { left: 60, top: 22, width: 165, height: 150, rotate: 15 },
  { left: 153, top: 107, width: 155, height: 125, rotate: -2 },
  { left: 7, top: 240, width: 150, height: 160, rotate: -12 },
  { left: 115, top: 217, width: 120, height: 150, rotate: -5 },
  { left: 202, top: 220, width: 170, height: 165, rotate: 12 },
];

/** A slot's photo, or the striped placeholder while it has none. */
export function PhotoFill({ slot, sizes }: { slot: PhotoSlot; sizes: string }) {
  return slot.src ? (
    <Image
      src={slot.src}
      alt={slot.alt ?? ""}
      fill
      sizes={sizes}
      className="object-cover"
    />
  ) : (
    <div className="placeholder-stripes h-full w-full" aria-hidden="true" />
  );
}

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/** Static collage for narrow screens, with an "Out of office" caption. */
export default function PhotoCollage({ className = "" }: { className?: string }) {
  return (
    <figure
      className={`relative aspect-[390/450] w-full max-w-[390px] ${className}`}
    >
      {PHOTO_SLOTS.map((slot, index) => (
        <div
          key={index}
          className={`absolute overflow-hidden ${cardSurface}`}
          style={{
            left: pct(slot.left, COLLAGE_W),
            top: pct(slot.top, COLLAGE_H),
            width: pct(slot.width, COLLAGE_W),
            height: pct(slot.height, COLLAGE_H),
            transform: `rotate(${slot.rotate}deg)`,
          }}
        >
          <PhotoFill slot={slot} sizes="200px" />
        </div>
      ))}
      <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-(--accent) px-3.5 py-1 font-mono text-[15px] leading-5 whitespace-nowrap text-white shadow-[0_4px_10px_rgba(27,29,46,.18)]">
        Out of office
      </figcaption>
    </figure>
  );
}
