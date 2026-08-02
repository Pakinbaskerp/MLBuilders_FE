import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  template: `
    <div class="row g-4 align-items-start">
      @if (image) {
        <div class="col-12 col-lg-5">
          <div class="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm">
            <img
              appLazyImage
              class="img-fluid object-fit-cover"
              [src]="image.imageUrl"
              [imageAlt]="image.alt"
              [imageLoading]="image.loading ?? 'lazy'"
              [attr.title]="image.title"
            />
          </div>
        </div>
      }
      <div class="col-12" [class.col-lg-7]="image">
        <div class="accordion" id="mlFaqAccordion">
          @for (item of items; track item.question; let i = $index) {
            <div class="accordion-item">
              <h3 class="accordion-header">
                <button
                  class="accordion-button"
                  [class.collapsed]="i !== 0"
                  type="button"
                  data-bs-toggle="collapse"
                  [attr.data-bs-target]="'#faq-' + i"
                  [attr.aria-expanded]="i === 0"
                  [attr.aria-controls]="'faq-' + i"
                >
                  {{ item.question }}
                </button>
              </h3>
              <div
                [id]="'faq-' + i"
                class="accordion-collapse collapse"
                [class.show]="i === 0"
                data-bs-parent="#mlFaqAccordion"
              >
                <div class="accordion-body text-secondary">{{ item.answer }}</div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class FaqAccordionComponent {
  @Input() items: { question: string; answer: string }[] = [
    {
      question: 'Can this section support dynamic FAQs later?',
      answer: 'Yes. The component accepts FAQ arrays and is ready for API or CMS binding.'
    }
  ];
  @Input() image?: ImageModel;
}
