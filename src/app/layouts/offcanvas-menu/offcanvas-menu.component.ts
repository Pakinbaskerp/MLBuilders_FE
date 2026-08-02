import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  APP_BOOK_VISIT_LINK,
  APP_CONTACT_PHONE_LINK,
  APP_CONTACT_WHATSAPP_LINK
} from '../../core/constants/app.constants';
import { NavigationService } from '../../core/services/navigation.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-offcanvas-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="offcanvas offcanvas-end" tabindex="-1" id="mlOffcanvasMenu" aria-labelledby="mlOffcanvasMenuLabel">
      <div class="offcanvas-header border-bottom">
        <h2 id="mlOffcanvasMenuLabel" class="h5 mb-0 text-primary">ML Builders</h2>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close menu"></button>
      </div>
      <div class="offcanvas-body d-flex flex-column">
        <ul class="list-unstyled d-flex flex-column gap-2 mb-4">
          @for (item of navigationService.navLinks(); track item.path) {
            <li>
              <a
                class="btn btn-light w-100 text-start"
                [routerLink]="item.path"
                data-bs-dismiss="offcanvas"
                [attr.aria-label]="item.label"
              >
                {{ item.label }}
              </a>
            </li>
          }
        </ul>

        <div class="d-flex flex-column gap-2 mt-auto">
          <button type="button" class="btn btn-ml-outline" (click)="themeService.toggleTheme()">
            Toggle Theme
          </button>
          <a class="btn btn-ml-orange" routerLink="/request-quote" data-bs-dismiss="offcanvas">Request Quote</a>
          <a class="btn btn-call" [href]="callLink">Call</a>
          <a class="btn btn-whatsapp" [href]="whatsappLink" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a class="btn btn-ml-secondary" [routerLink]="bookVisitLink" data-bs-dismiss="offcanvas">Book Site Visit</a>
        </div>
      </div>
    </div>
  `
})
export class OffcanvasMenuComponent {
  protected readonly navigationService = inject(NavigationService);
  protected readonly themeService = inject(ThemeService);
  protected readonly callLink = APP_CONTACT_PHONE_LINK;
  protected readonly whatsappLink = APP_CONTACT_WHATSAPP_LINK;
  protected readonly bookVisitLink = APP_BOOK_VISIT_LINK;
}
