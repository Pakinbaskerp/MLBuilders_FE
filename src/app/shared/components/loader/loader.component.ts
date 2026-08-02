import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('fade', [
      transition(':enter', [style({ opacity: 0 }), animate('200ms ease-in', style({ opacity: 1 }))]),
      transition(':leave', [animate('150ms ease-out', style({ opacity: 0 }))])
    ])
  ],
  template: `
    @if (layoutService.isLoading()) {
      <div
        @fade
        class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
        style="z-index: 2000;"
        aria-live="polite"
        aria-label="Loading content"
      >
        <div class="text-center text-white">
          <div class="spinner-border text-light" role="status"></div>
          <p class="mt-3 mb-0">Loading...</p>
        </div>
      </div>
    }
  `
})
export class LoaderComponent {
  protected readonly layoutService = inject(LayoutService);
}
