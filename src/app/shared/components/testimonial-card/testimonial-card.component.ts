import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  template: `
    <article class="card h-100 border-0 shadow-sm">
      <div class="card-body">
        <p class="text-secondary fst-italic">"{{ quote }}"</p>
        <div class="d-flex align-items-center gap-3">
          <img
            appLazyImage
            class="rounded-circle img-fluid"
            [src]="image.imageUrl"
            [imageAlt]="image.alt"
            [imageLoading]="image.loading ?? 'lazy'"
            [attr.title]="image.title"
            width="56"
            height="56"
          />
          <div>
            <h3 class="h6 mb-0">{{ name }}</h3>
            <small class="text-secondary">{{ role }}</small>
          </div>
        </div>
      </div>
    </article>
  `
})
export class TestimonialCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() quote = 'Client testimonial placeholder for future content.';
  @Input() name = 'Client Name';
  @Input() role = 'Home Owner';
}
