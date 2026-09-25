import { Component, inject } from '@angular/core';
import { ABOUT_IMAGES } from '../../core/constants/app.constants';
import { SeoService } from '../../core/services/seo.service';
import { LazyImageDirective } from '../../shared/directives/lazy-image.directive';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [LazyImageDirective],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPageComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(
      {
        title: 'About Us',
        description:
          'Meet the team behind ML Builders — a construction company built on integrity, honest pricing, and on-time delivery for clients across Chennai and Kancheepuram.',
        keywords: 'about ML Builders, construction company Chennai, builders Kancheepuram'
      },
      '/about'
    );
  }

  protected readonly missionImage = ABOUT_IMAGES.mission;

  protected readonly missionPillars = [
    {
      icon: 'bi-shield-check',
      title: 'Integrity First',
      description: 'We grow by doing right by every client, every time — no shortcuts, no exceptions.'
    },
    {
      icon: 'bi-cash-stack',
      title: 'Honest Pricing',
      description: 'Transparent estimates and no hidden costs, from the first quote to handover.'
    },
    {
      icon: 'bi-clock-history',
      title: 'Built On Time',
      description: 'Planned timelines and steady progress updates until the final day.'
    },
    {
      icon: 'bi-emoji-smile',
      title: 'Client Confidence',
      description: 'Homes and workspaces built to last, so you can move forward with peace of mind.'
    }
  ];
}
