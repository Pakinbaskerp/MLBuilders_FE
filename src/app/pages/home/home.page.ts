import { Component } from '@angular/core';
import { PLACEHOLDER_IMAGES } from '../../core/constants/app.constants';
import { HEADER_NAV_LINKS } from '../../core/constants/navigation.constants';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { BootstrapCarouselComponent } from '../../shared/components/bootstrap-carousel/bootstrap-carousel.component';
import { BootstrapDropdownComponent } from '../../shared/components/bootstrap-dropdown/bootstrap-dropdown.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { StatisticsCardComponent } from '../../shared/components/statistics-card/statistics-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    SectionTitleComponent,
    ServiceCardComponent,
    StatisticsCardComponent,
    CtaBannerComponent,
    BootstrapCarouselComponent,
    BootstrapDropdownComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent {
  protected readonly heroImage = PLACEHOLDER_IMAGES.hero;
  protected readonly serviceImage = PLACEHOLDER_IMAGES.service;
  protected readonly projectImage = PLACEHOLDER_IMAGES.project;
  protected readonly quickLinks = HEADER_NAV_LINKS;
  protected readonly carouselImages = [PLACEHOLDER_IMAGES.hero, PLACEHOLDER_IMAGES.project, PLACEHOLDER_IMAGES.gallery];
}
