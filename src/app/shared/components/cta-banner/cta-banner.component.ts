import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, RouterLink, LazyImageDirective],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {
  @Input() title = 'Start Your Next Landmark Project';
  @Input() description = 'Reusable CTA banner for conversion-focused sections.';
  @Input() actionText = 'Book Site Visit';
  @Input() actionLink = '/request-quote';
  @Input() image?: ImageModel;
}
