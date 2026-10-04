import type { Transition } from "motion/react";

export const LAYOUT: Transition = { type: "spring", duration: 0.5, bounce: 0 };
export const MENU_MORPH: Transition = { ...LAYOUT, duration: 0.42 };
export const STACK_RETURN: Transition = { ...LAYOUT, duration: 0.38, bounce: 0.08 };
export const STACK_RETURN_DISSOLVE: Transition = {
  duration: 0.15,
  delay: 0.38 - 0.15,
  ease: "easeOut",
};
export const STACK_FAN: Transition = { type: "spring", duration: 0.32, bounce: 0 };
