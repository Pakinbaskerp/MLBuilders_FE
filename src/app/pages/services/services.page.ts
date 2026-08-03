import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [PageLayoutComponent],
  templateUrl: './services.page.html',
  styleUrl: './services.page.scss'
})
export class ServicesPageComponent {}
