import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [PageLayoutComponent],
  template: `
    <app-page-layout
      eyebrow="Gallery"
      title="Gallery"
      subtitle="Responsive gallery route scaffold is ready."
    >
      <div class="alert alert-light border mb-0">Gallery grid, modal previews, and filters will be implemented later.</div>
    </app-page-layout>
  `
})
export class GalleryPageComponent {}
