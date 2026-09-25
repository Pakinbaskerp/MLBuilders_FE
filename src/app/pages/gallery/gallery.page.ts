import { Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.scss'
})
export class GalleryPageComponent {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(
      {
        title: 'Gallery',
        description:
          'A visual look at ML Builders’ completed construction and interior projects across Chennai and Tamil Nadu.',
        keywords: 'ML Builders gallery, construction photos Chennai'
      },
      '/gallery'
    );
  }
}
