import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FloatingButtonsComponent } from '../../shared/components/floating-buttons/floating-buttons.component';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FloatingButtonsComponent, LoaderComponent],
  template: `
    <div class="d-flex flex-column min-vh-100 bg-body">
      <app-loader />
      <app-header />
      <main class="flex-grow-1" id="main-content">
        <router-outlet />
      </main>
      <app-footer />
      <app-floating-buttons />
    </div>
  `
})
export class MainLayoutComponent {}
