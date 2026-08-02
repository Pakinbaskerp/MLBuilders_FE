import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [PageLayoutComponent],
  template: `
    <app-page-layout
      eyebrow="About"
      title="About ML Builders"
      subtitle="Base page scaffold is ready. Detailed content sections will be added later."
    >
      <div class="alert alert-light border mb-0">About page modules are configured for the next implementation phase.</div>
    </app-page-layout>
  `
})
export class AboutPageComponent {}
