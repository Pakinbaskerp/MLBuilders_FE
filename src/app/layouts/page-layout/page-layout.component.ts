import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  template: `
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-xl-10">
            <header class="mb-4 text-center">
              <p class="text-primary text-uppercase fw-semibold mb-2">{{ eyebrow }}</p>
              <h1 class="display-6 fw-bold mb-2">{{ title }}</h1>
              @if (subtitle) {
                <p class="text-secondary mb-0">{{ subtitle }}</p>
              }
            </header>
            <ng-content />
          </div>
        </div>
      </div>
    </section>
  `
})
export class PageLayoutComponent {
  @Input() eyebrow = 'ML Builders';
  @Input() title = 'Page Title';
  @Input() subtitle = '';
}
