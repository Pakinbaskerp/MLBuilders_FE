import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { APP_CONTACT_PHONE_LINK } from '../../core/constants/app.constants';
import { NavigationService } from '../../core/services/navigation.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  protected readonly navigationService = inject(NavigationService);
  protected readonly themeService = inject(ThemeService);
  protected readonly callLink = APP_CONTACT_PHONE_LINK;
}
