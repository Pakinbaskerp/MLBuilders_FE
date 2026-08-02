import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import {
  APP_CONTACT_PHONE_LINK,
  APP_CONTACT_WHATSAPP_LINK
} from '../../../core/constants/app.constants';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'app-floating-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="position-fixed bottom-0 end-0 m-3 d-flex flex-column gap-2" style="z-index: 1050;">
      <a
        class="btn btn-call rounded-circle shadow"
        [href]="phoneLink"
        aria-label="Call ML Builders now"
      >
        <i class="bi bi-telephone-fill"></i>
      </a>
      <a
        class="btn btn-whatsapp rounded-circle shadow"
        [href]="whatsAppLink"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ML Builders on WhatsApp"
      >
        <i class="bi bi-whatsapp"></i>
      </a>
      @if (layoutService.isBackToTopVisible()) {
        <button
          type="button"
          class="btn btn-ml-secondary rounded-circle shadow"
          (click)="layoutService.scrollToTop()"
          aria-label="Scroll back to top"
        >
          <i class="bi bi-arrow-up"></i>
        </button>
      }
    </div>
  `
})
export class FloatingButtonsComponent {
  protected readonly layoutService = inject(LayoutService);
  protected readonly phoneLink = APP_CONTACT_PHONE_LINK;
  protected readonly whatsAppLink = APP_CONTACT_WHATSAPP_LINK;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.layoutService.updateScrollState(window.scrollY);
  }
}
