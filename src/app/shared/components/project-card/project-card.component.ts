import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  template: `
    <article class="card h-100 border-0 shadow-sm">
      <div class="ratio ratio-4x3">
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
        <span class="badge text-bg-light text-primary mb-2">{{ category }}</span>
        <h3 class="h5 mb-2">{{ title }}</h3>
        <p class="text-secondary mb-0">{{ location }}</p>
      </div>
    </article>
  `
})
export class ProjectCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() title = 'Project Name';
  @Input() category = 'Residential';
  @Input() location = 'Project location';
}
