import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [PageLayoutComponent],
  template: `
    <app-page-layout
      eyebrow="Services"
      title="Construction Services"
      subtitle="Scalable services page shell prepared with Bootstrap-first structure."
    >
      <div class="alert alert-light border mb-0">Service categories and detailed cards will be integrated in the next step.</div>
    </app-page-layout>
  `
})
export class ServicesPageComponent {}
