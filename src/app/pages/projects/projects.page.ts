import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [PageLayoutComponent],
  template: `
    <app-page-layout
      eyebrow="Projects"
      title="Project Portfolio"
      subtitle="Base route and layout are configured for future project listings."
    >
      <div class="alert alert-light border mb-0">Project cards and filters will be added in the build-out phase.</div>
    </app-page-layout>
  `
})
export class ProjectsPageComponent {}
