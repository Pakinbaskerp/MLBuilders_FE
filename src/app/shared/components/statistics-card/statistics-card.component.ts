import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss'
})
export class StatisticsCardComponent {
  @Input() value = '00+';
  @Input() label = 'Metric Label';
}
