import { Component, inject, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { GalleryService } from "./services/gallery.service";
import { Filter } from "./models/filter";
import { FiltersComponent } from "./components/filters/filters.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeroComponent } from "./components/hero/hero.component";
import { LightboxService } from "./services/lightbox.service";
import { ANIMATIONS } from "./animations";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, FiltersComponent, GalleryComponent, HeroComponent],
  templateUrl: "./app.component.html",
  animations: [ANIMATIONS.PHOTO_ANIMATION, ANIMATIONS.BG_FADE],
})
export class AppComponent {
  title = "Photo Scroller";
  renderer = inject(Renderer2);
  galleryService = inject(GalleryService);
  lightboxService = inject(LightboxService);

  photos = this.galleryService.filteredPhotos;
  filters = this.galleryService.filters;
  currentFilter = this.galleryService.currentFilter;
  selectedPhoto = this.lightboxService.selectedPhoto;

  onFilterChange(filter: Filter) {
    this.galleryService.changeFilter(filter);
  }

  closePhoto() {
    this.renderer.removeClass(document.body, "overflow-hidden");
    this.lightboxService.setSelectedPhoto(null);
  }
}
