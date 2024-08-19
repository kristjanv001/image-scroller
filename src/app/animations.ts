import { transition, trigger, style, animate, state } from "@angular/animations";

export const ANIMATIONS = {
  PHOTO_ANIMATION: trigger("photoAnimation", [
    transition(":enter", [
      style({ transform: "scale(0.9)", opacity: 1 }),
      animate("0.2s ease-out", style({ transform: "scale(1)", opacity: 1 })),
    ]),

    transition(":leave", [animate("0.2s ease-in", style({ transform: "scale(0.1)", opacity: 0 }))]),
  ]),

  BG_FADE: trigger("bgFade", [
    transition("void => *", [
      style({ opacity: 0 }),
      animate("0.2s ease-out", style({ opacity: 1 })),
    ]),
    transition("* => void", [animate(".150s ease-in", style({ opacity: 0 }))]),
  ]),
};
