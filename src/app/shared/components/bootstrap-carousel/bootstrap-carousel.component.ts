import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-bootstrap-carousel',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './bootstrap-carousel.component.html',
  styleUrl: './bootstrap-carousel.component.scss'
})
export class BootstrapCarouselComponent {
  @Input() carouselId = 'mlCarousel';
  @Input({ required: true }) slides: ImageModel[] = [];
}
