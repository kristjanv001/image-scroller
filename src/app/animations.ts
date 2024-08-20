import { transition, trigger, style, animate, state } from "@angular/animations";

export const ANIMATIONS = {
  PHOTO_ANIMATION: trigger("photoPop", [
    transition(":enter", [
      style({ transform: "scale(0.9)", opacity: 1 }),
      animate("0.2s ease-out", style({ transform: "scale(1)", opacity: 1 })),
    ]),

    transition(":leave", [animate("0.2s ease-in", style({ transform: "scale(0.98)", opacity: 1 }))]),
  ]),

  BG_FADE: trigger("bgFade", [
    transition("void => *", [style({ opacity: 0 }), animate("0.2s ease-out", style({ opacity: 1 }))]),
    transition("* => void", [animate("0.2s ease-in", style({ opacity: 0 }))]),
  ]),
};
