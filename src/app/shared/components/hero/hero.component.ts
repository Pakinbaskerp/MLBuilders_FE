import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, LazyImageDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() tag = 'Premium Construction & Real Estate';
  @Input() title = 'Building Excellence With Trust';
  @Input() subtitle =
    'Scalable hero base component for ML Builders. Full content and campaign variants will be added later.';
  @Input() primaryActionText = 'Request Quote';
  @Input() secondaryActionText = 'View Projects';
  @Input() primaryActionLink = '/request-quote';
  @Input() secondaryActionLink = '/projects';
  @Input({ required: true }) image!: ImageModel;
  @Input() secondaryImage?: ImageModel;
}
