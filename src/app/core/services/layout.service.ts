import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly loadingSignal = signal(false);
  private readonly backToTopVisibleSignal = signal(false);
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);

  readonly isLoading = this.loadingSignal.asReadonly();
  readonly isBackToTopVisible = this.backToTopVisibleSignal.asReadonly();
  readonly isLoading$ = this.loadingSubject.asObservable();

  setLoading(isLoading: boolean): void {
    this.loadingSignal.set(isLoading);
    this.loadingSubject.next(isLoading);
  }

  setBackToTopVisible(isVisible: boolean): void {
    this.backToTopVisibleSignal.set(isVisible);
  }

  updateScrollState(scrollY: number): void {
    this.setBackToTopVisible(scrollY > 320);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
