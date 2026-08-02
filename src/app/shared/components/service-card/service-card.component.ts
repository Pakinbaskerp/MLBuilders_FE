import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  template: `
    <article class="card h-100 border-0 shadow-sm">
      <div class="ratio ratio-16x9">
        <img
          appLazyImage
          class="img-fluid object-fit-cover"
          [src]="image.imageUrl"
          [imageAlt]="image.alt"
          [imageLoading]="image.loading ?? 'lazy'"
          [attr.title]="image.title"
        />
      </div>
      <div class="card-body d-flex flex-column">
        <h3 class="h5">{{ title }}</h3>
        <p class="text-secondary flex-grow-1 mb-3">{{ description }}</p>
        <button type="button" class="btn btn-sm btn-ml-outline align-self-start" aria-label="Learn more about this service">
          Learn More
        </button>
      </div>
    </article>
  `
})
export class ServiceCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() title = 'Service Name';
  @Input() description = 'Service card base structure.';
}
