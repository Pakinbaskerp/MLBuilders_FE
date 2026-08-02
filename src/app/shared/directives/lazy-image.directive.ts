import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appLazyImage]',
  standalone: true
})
export class LazyImageDirective implements OnInit {
  @Input() imageAlt = 'ML Builders image';
  @Input() imageLoading: 'lazy' | 'eager' = 'lazy';

  constructor(
    private readonly elementRef: ElementRef<HTMLImageElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setAttribute(this.elementRef.nativeElement, 'alt', this.imageAlt);
    this.renderer.setAttribute(this.elementRef.nativeElement, 'loading', this.imageLoading);
    this.renderer.setAttribute(this.elementRef.nativeElement, 'decoding', 'async');
  }
}
