import { Component } from '@angular/core';
import { PLACEHOLDER_IMAGES } from '../../core/constants/app.constants';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { ContactCardComponent } from '../../shared/components/contact-card/contact-card.component';
import { FaqAccordionComponent } from '../../shared/components/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [PageLayoutComponent, ContactCardComponent, FaqAccordionComponent],
  template: `
    <app-page-layout
      eyebrow="Contact"
      title="Contact ML Builders"
      subtitle="Base contact page sections are wired and ready for final business content."
    >
      <div class="row g-4">
        <div class="col-12 col-lg-5">
          <app-contact-card [image]="teamImage" />
        </div>
        <div class="col-12 col-lg-7">
          <app-faq-accordion [items]="faqItems" />
        </div>
      </div>
    </app-page-layout>
  `
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
