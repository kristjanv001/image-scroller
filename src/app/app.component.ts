import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { GalleryService } from "./services/gallery.service";
import { Filter } from "./models/filter";
import { FiltersComponent } from "./components/filters/filters.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeroComponent } from "./components/hero/hero.component";
import { LightboxComponent } from "./components/lightbox/lightbox.component";
import { LightboxService } from "./services/lightbox.service";
import { trigger, transition, query, animateChild } from "@angular/animations";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, FiltersComponent, GalleryComponent, HeroComponent, LightboxComponent],
  templateUrl: "./app.component.html",
  animations: [trigger("blub", [transition("* => void", [query("@*", [animateChild()], { optional: true })])])],
})
export class AppComponent {
  title = "Photo Scroller";
  galleryService = inject(GalleryService);
  lightboxService = inject(LightboxService);

  photos = this.galleryService.filteredPhotos;
  filters = this.galleryService.filters;
  currentFilter = this.galleryService.currentFilter;
  selectedPhoto = this.lightboxService.selectedPhoto;

  onFilterChange(filter: Filter) {
    this.galleryService.changeFilter(filter);
  }
}
