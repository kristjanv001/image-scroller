import { Injectable, signal, computed } from "@angular/core";
import { Photo } from "../models/photo";

@Injectable({
  providedIn: "root",
})
export class LightboxService {
  private state = signal<LightboxState>({
    selectedPhoto: null,
  });

  public readonly selectedPhoto = computed(() => this.state().selectedPhoto);

  public setSelectedPhoto(photo: Photo | null) {
    this.state.update((prevState) => ({
      ...prevState,
      selectedPhoto: photo,
    }));
  }
}

interface LightboxState {
  selectedPhoto: Photo | null;
}
