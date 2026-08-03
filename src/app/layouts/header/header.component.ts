import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { OffcanvasMenuComponent } from '../offcanvas-menu/offcanvas-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, OffcanvasMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {}
