import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() title = 'Service Name';
  @Input() description = 'Service card base structure.';
}
