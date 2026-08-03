import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './gallery-card.component.html',
  styleUrl: './gallery-card.component.scss'
})
export class GalleryCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() title = 'Gallery Item';
  @Input() caption = 'Preview image';
}
