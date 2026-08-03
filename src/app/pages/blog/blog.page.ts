import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './blog.page.html',
  styleUrl: './blog.page.scss'
})
export class BlogPageComponent {}
