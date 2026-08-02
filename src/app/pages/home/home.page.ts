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
  template: `
    <app-hero [image]="heroImage" />

    <section class="py-5">
      <div class="container">
        <app-section-title
          eyebrow="Base Setup"
          title="Homepage Modules"
          subtitle="Production-ready reusable sections are configured. Final content will be added in the next phase."
        />
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4">
            <app-service-card [image]="serviceImage" title="Service Card" />
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <app-statistics-card value="25+" label="Years Experience" />
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <app-statistics-card value="350+" label="Projects Delivered" />
          </div>
        </div>
      </div>
    </section>

    <section class="pb-5">
      <div class="container">
        <div class="row g-4 align-items-start">
          <div class="col-12 col-lg-8">
            <app-bootstrap-carousel [carouselId]="'homeShowcase'" [slides]="carouselImages" />
          </div>
          <div class="col-12 col-lg-4 d-flex justify-content-start justify-content-lg-end">
            <app-bootstrap-dropdown label="Quick Navigation" [items]="quickLinks" />
          </div>
        </div>
      </div>
    </section>

    <section class="pb-5">
      <div class="container">
        <app-cta-banner [image]="projectImage" />
      </div>
    </section>
  `
})
export class HomePageComponent {
  protected readonly heroImage = PLACEHOLDER_IMAGES.hero;
  protected readonly serviceImage = PLACEHOLDER_IMAGES.service;
  protected readonly projectImage = PLACEHOLDER_IMAGES.project;
  protected readonly quickLinks = HEADER_NAV_LINKS;
  protected readonly carouselImages = [PLACEHOLDER_IMAGES.hero, PLACEHOLDER_IMAGES.project, PLACEHOLDER_IMAGES.gallery];
}
