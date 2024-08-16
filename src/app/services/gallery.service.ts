import { Injectable, signal, computed, inject } from "@angular/core";
import { Filter } from "../models/filter";
import { Photo } from "../models/photo";
import { HttpClient } from "@angular/common/http";
import { pipe, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  private photosUrl = "api/photos";
  private http = inject(HttpClient);

  constructor() {
    this.http.get<any[]>(this.photosUrl).pipe(
      tap(photos => console.log(photos))
    ).subscribe(x => console.log(x))
  }

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
