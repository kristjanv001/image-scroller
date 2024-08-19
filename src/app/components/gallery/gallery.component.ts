import { Component, input, inject, Renderer2 } from "@angular/core";
import { Photo } from "../../models/photo";
import { LightboxService } from "../../services/lightbox.service";
import { ANIMATIONS } from "../../animations";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [NgClass],
  templateUrl: "./gallery.component.html",
  animations: [ANIMATIONS.PHOTO_ANIMATION]
})
export class GalleryComponent {
  renderer = inject(Renderer2);
  lightboxService = inject(LightboxService);
  photos = input.required<Photo[]>(); // @todo: get from service directly

  openLightbox(photo: Photo) {
    this.renderer.addClass(document.body, 'overflow-hidden');
    this.lightboxService.setSelectedPhoto(photo);
  }
}
