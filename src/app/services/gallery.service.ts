import { Injectable, signal, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Filter } from "../models/filter";
import { Photo } from "../models/photo";
import { HttpClient } from "@angular/common/http";
import { pipe, tap, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  private photosUrl = "api/photos";
  private http = inject(HttpClient);

  // state for photos (async)
  private readonly photos = toSignal(
    this.http.get<Photo[]>(this.photosUrl).pipe(
      // map(photos => shuffleArray(photos)),
      tap((photos) => console.log(photos)),
    ),
    { initialValue: [] },
  );

  // state
  private state = signal<GalleryState>({
    currentFilter: "All",
    filters: ["All", "Architecture", "Neon", "Landscape", "Portrait"],
  });

  // state slices
  public currentFilter = computed(() => this.state().currentFilter);
  public filters = computed(() => this.state().filters);
  public filteredPhotos = computed(() => {
    if (this.currentFilter() !== "All") {
      return this.photos().filter((photo: Photo) => photo.tags.includes(this.currentFilter().toLowerCase()));
    } else {
      return this.photos();
    }
  });

  // reducers
  public changeFilter(filter: Filter) {
    this.state.update((state) => ({
      ...state,
      currentFilter: filter,
    }));
  }
}

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

interface GalleryState {
  currentFilter: Filter;
  filters: Filter[];
}
