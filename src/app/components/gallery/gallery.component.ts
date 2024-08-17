import { Component, input } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  photos = input.required<Photo[]>();
}
