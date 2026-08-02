import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="list-unstyled d-flex align-items-center gap-2 mb-0">
      @for (link of links; track link.label) {
        <li>
          <a
            class="btn btn-outline-light btn-sm rounded-circle"
            [href]="link.url"
            [attr.aria-label]="link.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i [class]="link.icon"></i>
          </a>
        </li>
      }
    </ul>
  `
})
export class SocialLinksComponent {
  @Input() links: { label: string; url: string; icon: string }[] = [
    { label: 'Facebook', url: '#', icon: 'bi bi-facebook' },
    { label: 'Instagram', url: '#', icon: 'bi bi-instagram' },
    { label: 'LinkedIn', url: '#', icon: 'bi bi-linkedin' },
    { label: 'YouTube', url: '#', icon: 'bi bi-youtube' }
  ];
}
