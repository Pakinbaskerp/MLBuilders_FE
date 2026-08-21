import { Component } from '@angular/core';
import { PLACEHOLDER_IMAGES, SERVICE_DESCRIPTIONS } from '../../core/constants/app.constants';
import { FOOTER_SERVICE_LINKS } from '../../core/constants/navigation.constants';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [PageLayoutComponent, ServiceCardComponent],
  templateUrl: './services.page.html',
  styleUrl: './services.page.scss'
})
export class ServicesPageComponent {
  protected readonly services = FOOTER_SERVICE_LINKS.map((link) => ({
    title: link.label,
    link: link.path,
    description: SERVICE_DESCRIPTIONS[link.label] ?? '',
    image: PLACEHOLDER_IMAGES.service
  }));
}
