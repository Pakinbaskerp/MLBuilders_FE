import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICE_LINKS
} from '../../core/constants/navigation.constants';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly quickLinks = FOOTER_QUICK_LINKS;
  protected readonly serviceLinks = FOOTER_SERVICE_LINKS;
  protected readonly year = new Date().getFullYear();
}
