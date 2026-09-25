import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { APP_CONTACT_WHATSAPP_LINK } from '../../core/constants/app.constants';
import { SeoService } from '../../core/services/seo.service';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-request-quote-page',
  standalone: true,
  imports: [ReactiveFormsModule, PageLayoutComponent],
  templateUrl: './request-quote.page.html',
  styleUrl: './request-quote.page.scss'
})
export class RequestQuotePageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update(
      {
        title: 'Request a Quote',
        description:
          'Request a free construction or renovation quote from ML Builders, serving Chennai, Kancheepuram, and Tamil Nadu.',
        keywords: 'free construction quote Chennai, request quote ML Builders'
      },
      '/request-quote'
    );
  }

  protected readonly quoteForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  protected sendViaWhatsApp(): void {
    if (this.quoteForm.invalid) {
      return;
    }

    const { name, phone, message } = this.quoteForm.getRawValue();
    const text = [
      `*New quote request from the website*`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Project Requirement: ${message}`
    ].join('\n');

    window.open(`${APP_CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, '_blank');
  }
}
