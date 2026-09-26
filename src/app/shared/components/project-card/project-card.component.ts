import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) image!: ImageModel;
  @Input() title = 'Project Name';
  @Input() category = 'Residential';
  @Input() location = 'Project location';
  @Input() modalTarget = '';
  @Output() imageClick = new EventEmitter<void>();
}
