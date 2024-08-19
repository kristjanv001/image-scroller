import { Component, inject, Renderer2 } from "@angular/core";
import { Photo } from "../../models/photo";
import { LightboxService } from "../../services/lightbox.service";
import { ANIMATIONS } from "../../animations";

@Component({
  selector: "app-lightbox",
  standalone: true,
  imports: [],
  templateUrl: "./lightbox.component.html",
  animations: [ANIMATIONS.PHOTO_ANIMATION, ANIMATIONS.BG_FADE],
})
export class LightboxComponent {
  renderer = inject(Renderer2);
  lightboxService = inject(LightboxService);

  selectedPhoto = this.lightboxService.selectedPhoto;

  closeLightbox() {
    this.renderer.removeClass(document.body, "overflow-hidden");
    this.lightboxService.setSelectedPhoto(null);
  }
}
