import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APP_THEME_STORAGE_KEY } from '../constants/app.constants';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly modeSignal = signal<ThemeMode>('light');
  private readonly modeSubject = new BehaviorSubject<ThemeMode>('light');

  readonly mode = this.modeSignal.asReadonly();
  readonly mode$ = this.modeSubject.asObservable();
  readonly isDarkMode = computed(() => this.modeSignal() === 'dark');

  constructor() {
    this.initializeTheme();
  }

  toggleTheme(): void {
    this.setTheme(this.modeSignal() === 'light' ? 'dark' : 'light');
  }

  setTheme(mode: ThemeMode): void {
    this.modeSignal.set(mode);
    this.modeSubject.next(mode);
    this.applyTheme(mode);
  }

  private initializeTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(APP_THEME_STORAGE_KEY);
    }
    this.setTheme('light');
  }

  private applyTheme(mode: ThemeMode): void {
    this.document.documentElement.setAttribute('data-theme', mode);
    this.document.body.classList.toggle('theme-dark', mode === 'dark');

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(APP_THEME_STORAGE_KEY, mode);
    }
  }
}
