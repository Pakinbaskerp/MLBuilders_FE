import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  standalone: true,
  template: `
    <article class="card h-100 border-0 shadow-sm text-center">
      <div class="card-body">
        <h3 class="display-6 fw-bold text-primary mb-1">{{ value }}</h3>
        <p class="text-secondary mb-0">{{ label }}</p>
      </div>
    </article>
  `
})
export class StatisticsCardComponent {
  @Input() value = '00+';
  @Input() label = 'Metric Label';
}
