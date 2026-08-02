import { inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HEADER_NAV_LINKS } from '../constants/navigation.constants';
import { NavigationLink } from '../models/navigation.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);
  private readonly navLinksSignal = signal<NavigationLink[]>(HEADER_NAV_LINKS);
  private readonly activePathSignal = signal('/');

  readonly navLinks = this.navLinksSignal.asReadonly();
  readonly activePath = this.activePathSignal.asReadonly();

  constructor() {
    this.activePathSignal.set(this.router.url || '/');
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe({
      next: (event) => this.activePathSignal.set((event as NavigationEnd).urlAfterRedirects)
    });
  }
}
