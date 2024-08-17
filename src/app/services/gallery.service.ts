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

  readonly photos = toSignal(this.http.get<Photo[]>(this.photosUrl).pipe(
    map(photos => shuffleArray(photos)),
    tap((photos) => console.log(photos))
  ), {initialValue: []});

  private state = signal<GalleryState>({
    currentFilter: "All",
    filters: ["All", "Architecture", "Neon", "Landscape", "Portrait"],
  });

  public currentFilter = computed(() => this.state().currentFilter);
  public filters = computed(() => this.state().filters);

  public filterGallery(filter: Filter) {
    this.state.update((state) => ({
      ...state,
      currentFilter: filter,
    }));
  }
}

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

interface GalleryState {
  currentFilter: Filter;
  filters: Filter[];
}
