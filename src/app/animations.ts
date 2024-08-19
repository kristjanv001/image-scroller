import { transition, trigger, style, animate } from "@angular/animations";

export const ANIMATIONS = {
  PHOTO_ANIMATION: trigger("photoAnimation", [
    transition(":enter", [
      style({ opacity: 1, transform: "scale(0.96)" }),
      animate("0.2s ease", style({ opacity: 1, transform: "scale(1)" })),
    ]),
    transition(":leave", [
      style({ opacity: 1, transform: "scale(1)" }), // Start from full size
      animate("0.3s ease", style({ opacity: 0, transform: "scale(1)" })), // Fade out and scale down
    ]),
  ]),

  BACKGROUND_ANIMATION: trigger("bgAnimation", [
    transition(":enter", [
      style({ opacity: 1 }), // Initially invisible
      animate("0.3s ease", style({ opacity: 1 })), // Fade to visible
    ]),

    transition(":leave", [
      style({ opacity: 1 }), // Start from visible state
      animate("0.3s ease", style({ opacity: 0 })), // Fade out to invisible
    ]),
  ]),
};
