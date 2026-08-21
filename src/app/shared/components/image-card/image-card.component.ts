import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss'
})
export class ImageCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() title = 'Image Card';
  @Input() description = 'Base image card ready for content mapping.';
  @Input() category = '';
  @Input() date = '';
  @Input() readTime = '';
  @Input() modalTarget = '';
  @Output() readMore = new EventEmitter<void>();
}
