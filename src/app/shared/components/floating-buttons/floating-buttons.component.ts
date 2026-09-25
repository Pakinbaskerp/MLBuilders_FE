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
  templateUrl: './floating-buttons.component.html',
  styleUrl: './floating-buttons.component.scss'
})
export class FloatingButtonsComponent {
  protected readonly layoutService = inject(LayoutService);
  protected readonly phoneLink = APP_CONTACT_PHONE_LINK;

  private readonly defaultWhatsAppMessage = "Hi ML Builders, I'd like to know more about your construction services.";
  protected readonly whatsAppLink =
    `${APP_CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(this.defaultWhatsAppMessage)}`;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.layoutService.updateScrollState(window.scrollY);
  }
}
