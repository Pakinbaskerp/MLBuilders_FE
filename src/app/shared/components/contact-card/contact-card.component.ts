import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss'
})
export class ContactCardComponent {
  @Input() title = 'ML Builders Office';
  @Input() address = 'Address will be configured in content phase.';
  @Input() phone = '+91 90000 00000';
  @Input() email = 'hello@mlbuilders.com';
  @Input() image?: ImageModel;
}
