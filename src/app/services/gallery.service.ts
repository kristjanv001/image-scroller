import { Injectable, signal, computed } from "@angular/core";
import { Filter } from "../models/filter";

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  private state = signal<GalleryState>({
    photos: [],
    currentFilter: "All",
    filters: ["All", "Architecture", "Neon", "Landscape", "Portrait"],
  });

  photos = computed(() => this.state().photos);
  currentFilter = computed(() => this.state().currentFilter);
  filters = computed(() => this.state().filters);

  public filterGallery(filter: Filter) {
    this.state.update((state) => ({
      ...state,
      currentFilter: filter,
    }));
  }
}

interface GalleryState {
  photos: Photo[];
  currentFilter: Filter;
  filters: Filter[];
}

interface Photo {
  url: string;
  tags: string[];
}
