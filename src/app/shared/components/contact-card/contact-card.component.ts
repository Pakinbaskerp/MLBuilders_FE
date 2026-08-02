import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  template: `
    <article class="card h-100 border-0 shadow-sm">
      @if (image) {
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
      }
      <div class="card-body">
        <h3 class="h5 mb-3">{{ title }}</h3>
        <p class="text-secondary mb-2">
          <i class="bi bi-geo-alt-fill me-2"></i>{{ address }}
        </p>
        <p class="text-secondary mb-2">
          <i class="bi bi-telephone-fill me-2"></i>{{ phone }}
        </p>
        <p class="text-secondary mb-0">
          <i class="bi bi-envelope-fill me-2"></i>{{ email }}
        </p>
      </div>
    </article>
  `
})
export class ContactCardComponent {
  @Input() title = 'ML Builders Office';
  @Input() address = 'Address will be configured in content phase.';
  @Input() phone = '+91 90000 00000';
  @Input() email = 'hello@mlbuilders.com';
  @Input() image?: ImageModel;
}
