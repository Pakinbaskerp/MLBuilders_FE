import { Component, inject } from '@angular/core';
import { PLACEHOLDER_IMAGES, SERVICE_DESCRIPTIONS, SERVICE_IMAGES } from '../../core/constants/app.constants';
import { FOOTER_SERVICE_LINKS } from '../../core/constants/navigation.constants';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { SeoService } from '../../core/services/seo.service';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [PageLayoutComponent, ServiceCardComponent],
  templateUrl: './services.page.html',
  styleUrl: './services.page.scss'
})
export class ServicesPageComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(
      {
        title: 'Construction Services',
        description:
          'Residential construction, commercial construction, interior fit-outs, and renovation works — explore ML Builders’ full range of construction services in Chennai and Kancheepuram.',
        keywords:
          'residential construction Chennai, commercial construction Kancheepuram, interior fit-outs, renovation works Tamil Nadu'
      },
      '/services'
    );
  }

  protected readonly services = FOOTER_SERVICE_LINKS.map((link) => ({
    title: link.label,
    link: link.path,
    description: SERVICE_DESCRIPTIONS[link.label] ?? '',
    image: SERVICE_IMAGES[link.label] ?? PLACEHOLDER_IMAGES.service
  }));
}
