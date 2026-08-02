import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  template: `
    <article class="card border-0 shadow-sm h-100">
      <div class="ratio ratio-1x1">
        <img
          appLazyImage
          class="img-fluid object-fit-cover"
          [src]="image.imageUrl"
          [imageAlt]="image.alt"
          [imageLoading]="image.loading ?? 'lazy'"
          [attr.title]="image.title"
        />
      </div>
      <div class="card-body">
        <h3 class="h6 mb-1">{{ title }}</h3>
        <small class="text-secondary">{{ caption }}</small>
      </div>
    </article>
  `
})
export class GalleryCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() title = 'Gallery Item';
  @Input() caption = 'Preview image';
}
