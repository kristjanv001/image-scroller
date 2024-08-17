import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { GalleryService } from "./services/gallery.service";
import { Filter } from "./models/filter";
import { FiltersComponent } from "./components/filters/filters.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HeroComponent } from "./components/hero/hero.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, FiltersComponent, GalleryComponent, HeroComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Photo Scroller";

  galleryService = inject(GalleryService);

  photos = this.galleryService.filteredPhotos;
  filters = this.galleryService.filters;
  currentFilter = this.galleryService.currentFilter;

  onFilterChange(filter: Filter) {
    this.galleryService.changeFilter(filter);
  }
}
