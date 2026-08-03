import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() quote = 'Client testimonial placeholder for future content.';
  @Input() name = 'Client Name';
  @Input() role = 'Home Owner';
}
