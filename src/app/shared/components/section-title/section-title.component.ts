import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.scss'
})
export class SectionTitleComponent {
  @Input() eyebrow = 'Section';
  @Input() title = 'Section Title';
  @Input() subtitle = 'Reusable title component for future content blocks.';
  @Input() image?: ImageModel;
}
