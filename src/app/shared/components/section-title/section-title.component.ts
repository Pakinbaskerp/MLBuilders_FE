import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  template: `
    <div class="text-center mb-4">
      @if (image) {
        <img
          appLazyImage
          class="img-fluid mb-3"
          [src]="image.imageUrl"
          [imageAlt]="image.alt"
          [imageLoading]="image.loading ?? 'lazy'"
          [attr.title]="image.title"
          style="max-height: 64px;"
        />
      }
      <p class="text-uppercase text-primary fw-semibold mb-2">{{ eyebrow }}</p>
      <h2 class="h1 fw-bold mb-2">{{ title }}</h2>
      <p class="text-secondary mb-0">{{ subtitle }}</p>
    </div>
  `
})
export class SectionTitleComponent {
  @Input() eyebrow = 'Section';
  @Input() title = 'Section Title';
  @Input() subtitle = 'Reusable title component for future content blocks.';
  @Input() image?: ImageModel;
}
