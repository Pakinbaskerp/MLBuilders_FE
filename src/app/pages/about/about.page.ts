import { Component } from '@angular/core';
import { ABOUT_IMAGES } from '../../core/constants/app.constants';
import { LazyImageDirective } from '../../shared/directives/lazy-image.directive';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [LazyImageDirective],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPageComponent {
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
