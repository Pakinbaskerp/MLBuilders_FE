import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, RouterLink, LazyImageDirective],
  template: `
    <section class="bg-primary text-white rounded-4 p-4 p-lg-5">
      <div class="row align-items-center g-4">
        <div class="col-12 col-lg-8">
          <h3 class="h2 mb-2">{{ title }}</h3>
          <p class="mb-3 text-white-50">{{ description }}</p>
          <a [routerLink]="actionLink" class="btn btn-ml-orange">{{ actionText }}</a>
        </div>
        @if (image) {
          <div class="col-12 col-lg-4">
            <div class="ratio ratio-4x3">
              <img
                appLazyImage
                class="img-fluid object-fit-cover rounded-3"
                [src]="image.imageUrl"
                [imageAlt]="image.alt"
                [imageLoading]="image.loading ?? 'lazy'"
                [attr.title]="image.title"
              />
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class CtaBannerComponent {
  @Input() title = 'Start Your Next Landmark Project';
  @Input() description = 'Reusable CTA banner for conversion-focused sections.';
  @Input() actionText = 'Book Site Visit';
  @Input() actionLink = '/request-quote';
  @Input() image?: ImageModel;
}
