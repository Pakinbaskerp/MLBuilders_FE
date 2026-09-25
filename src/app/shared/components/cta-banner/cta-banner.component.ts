import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGE_PATHS } from '../../../core/constants/app.constants';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent {

  protected readonly backgroundImage = IMAGE_PATHS.components.ctaBannerBackground;

  @Input() title = 'Ready to Build Your Dream Home?';

  @Input() description =
    'Construction, Renovation, Interior Design, Estimation and Project Management services delivered with quality, transparency and on-time completion.';

  @Input() actionText = 'Request Free Quote';

  @Input() actionLink = '/request-quote';
}
