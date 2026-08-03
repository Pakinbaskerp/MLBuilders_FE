import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.scss'
})
export class GalleryPageComponent {}
