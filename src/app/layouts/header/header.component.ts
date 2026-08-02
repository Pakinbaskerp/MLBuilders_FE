import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { OffcanvasMenuComponent } from '../offcanvas-menu/offcanvas-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, OffcanvasMenuComponent],
  template: `
    <header class="sticky-top bg-white border-bottom shadow-sm">
      <app-navbar />
      <app-offcanvas-menu />
    </header>
  `
})
export class HeaderComponent {}
