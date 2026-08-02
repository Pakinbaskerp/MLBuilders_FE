import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [PageLayoutComponent],
  template: `
    <app-page-layout
      eyebrow="Blog"
      title="Insights & Updates"
      subtitle="Blog route is configured as part of the base architecture."
    >
      <div class="alert alert-light border mb-0">Blog cards and article detail pages will be added in a later sprint.</div>
    </app-page-layout>
  `
})
export class BlogPageComponent {}
