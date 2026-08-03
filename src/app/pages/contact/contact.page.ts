import { Component } from '@angular/core';
import { PLACEHOLDER_IMAGES } from '../../core/constants/app.constants';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { ContactCardComponent } from '../../shared/components/contact-card/contact-card.component';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [PageLayoutComponent, ContactCardComponent, FaqAccordionComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export class ContactPageComponent {
  protected readonly teamImage = PLACEHOLDER_IMAGES.team;
  protected readonly faqItems = [
    {
      question: 'Is this contact page production-ready for expansion?',
      answer: 'Yes. This scaffold supports API integrations, forms, maps, and content blocks.'
    }
  ];
}
