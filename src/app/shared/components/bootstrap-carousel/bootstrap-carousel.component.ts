import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-bootstrap-carousel',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  template: `
    <div [id]="carouselId" class="carousel slide" data-bs-ride="carousel" aria-label="Image carousel">
      <div class="carousel-inner rounded-4 overflow-hidden">
        @for (slide of slides; track slide.imageUrl; let i = $index) {
          <div class="carousel-item" [class.active]="i === 0">
            <div class="ratio ratio-16x9">
              <img
                appLazyImage
                class="img-fluid object-fit-cover w-100 h-100"
                [src]="slide.imageUrl"
                [imageAlt]="slide.alt"
                [imageLoading]="slide.loading ?? 'lazy'"
                [attr.title]="slide.title"
              />
            </div>
          </div>
        }
      </div>
      <button class="carousel-control-prev" type="button" [attr.data-bs-target]="'#' + carouselId" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" [attr.data-bs-target]="'#' + carouselId" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `
})
export class BootstrapCarouselComponent {
  @Input() carouselId = 'mlCarousel';
  @Input({ required: true }) slides: ImageModel[] = [];
}
