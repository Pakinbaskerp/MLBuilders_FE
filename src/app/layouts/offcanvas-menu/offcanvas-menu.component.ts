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
  templateUrl: './offcanvas-menu.component.html',
  styleUrl: './offcanvas-menu.component.scss'
})
export class OffcanvasMenuComponent {
  protected readonly navigationService = inject(NavigationService);
  protected readonly themeService = inject(ThemeService);
  protected readonly callLink = APP_CONTACT_PHONE_LINK;
  protected readonly whatsappLink = APP_CONTACT_WHATSAPP_LINK;
  protected readonly bookVisitLink = APP_BOOK_VISIT_LINK;
}
