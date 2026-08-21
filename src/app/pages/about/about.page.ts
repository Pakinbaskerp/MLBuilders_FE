import { Component } from '@angular/core';
import { PLACEHOLDER_IMAGES } from '../../core/constants/app.constants';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { LazyImageDirective } from '../../shared/directives/lazy-image.directive';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [PageLayoutComponent, LazyImageDirective],
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss'
})
export class AboutPageComponent {
  protected readonly missionImage = PLACEHOLDER_IMAGES.team;
  protected readonly storyImage = PLACEHOLDER_IMAGES.project;
}
