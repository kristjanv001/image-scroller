import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { GalleryService } from "./services/gallery.service";
import { Filter } from "./models/filter";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = "Photo Scroller";

  galleryService = inject(GalleryService);

  filters = this.galleryService.filters;
  currentFilter = this.galleryService.currentFilter;

  onFilterChange(filter: Filter) {
    this.galleryService.filterGallery(filter);
  }
}
