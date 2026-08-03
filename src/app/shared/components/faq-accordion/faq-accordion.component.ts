import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../core/models/image.model';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [CommonModule, LazyImageDirective],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss'
})
export class FaqAccordionComponent {
  @Input() items: { question: string; answer: string }[] = [
    {
      question: 'Can this section support dynamic FAQs later?',
      answer: 'Yes. The component accepts FAQ arrays and is ready for API or CMS binding.'
    }
  ];
  @Input() image?: ImageModel;
}
