import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PLACEHOLDER_IMAGES, SERVICE_DESCRIPTIONS, SERVICE_IMAGES } from '../../core/constants/app.constants';
import { FOOTER_SERVICE_LINKS } from '../../core/constants/navigation.constants';
import { ImageModel } from '../../core/models/image.model';
import { SeoService } from '../../core/services/seo.service';
import { CtaBannerComponent } from '../../shared/components/cta-banner/cta-banner.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { StatisticsCardComponent } from '../../shared/components/statistics-card/statistics-card.component';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import projectsData from '../../../assets/data/projects.json';

interface ProjectEntry {
  imageUrl: string;
  alt: string;
  title: string;
  category: string;
  location: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    ServiceCardComponent,
    StatisticsCardComponent,
    ProjectCardComponent,
    CtaBannerComponent,
    TestimonialCardComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(
      {
        title: 'Construction Company in Chennai & Kancheepuram',
        description:
          'ML Builders delivers residential and commercial construction, renovation, and interior design across Chennai, Kancheepuram, and Tamil Nadu — on time, on budget, and built to last.',
        keywords:
          'builders in Chennai, builders in Kancheepuram, construction company Tamil Nadu, ML Builders, home construction, residential construction, commercial construction'
      },
      '/'
    );
  }

  protected readonly heroImage = PLACEHOLDER_IMAGES.hero;
  protected readonly heroSecondaryImage = PLACEHOLDER_IMAGES.heroSecondary;

  protected readonly services = FOOTER_SERVICE_LINKS.slice(0, 3).map((link) => ({
    title: link.label,
    link: link.path,
    description: SERVICE_DESCRIPTIONS[link.label] ?? '',
    image: SERVICE_IMAGES[link.label] ?? PLACEHOLDER_IMAGES.service
  }));

  protected readonly featuredProjects = (projectsData as ProjectEntry[]).slice(0, 4).map((item) => ({
    title: item.title,
    category: item.category,
    location: item.location,
    image: { imageUrl: item.imageUrl, alt: item.alt, loading: 'lazy' } satisfies ImageModel
  }));
}
