import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  @Input() links: { label: string; url: string; icon: string }[] = [
    { label: 'Facebook', url: '#', icon: 'bi bi-facebook' },
    { label: 'Instagram', url: '#', icon: 'bi bi-instagram' },
    { label: 'LinkedIn', url: '#', icon: 'bi bi-linkedin' },
    { label: 'YouTube', url: '#', icon: 'bi bi-youtube' }
  ];
}
