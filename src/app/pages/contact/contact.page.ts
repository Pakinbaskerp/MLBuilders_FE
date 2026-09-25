import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  APP_CONTACT_EMAIL,
  APP_CONTACT_EMAIL_LINK,
  APP_CONTACT_INSTAGRAM,
  APP_CONTACT_INSTAGRAM_LINK,
  APP_CONTACT_PHONE,
  APP_CONTACT_PHONE_LINK,
  APP_CONTACT_PHONE_SECONDARY,
  APP_CONTACT_PHONE_SECONDARY_LINK,
  APP_CONTACT_WEBSITE,
  APP_CONTACT_WEBSITE_LINK,
  APP_CONTACT_WHATSAPP_LINK,
  PLACEHOLDER_IMAGES
} from '../../core/constants/app.constants';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export class ContactPageComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly heroBackground = PLACEHOLDER_IMAGES.hero.imageUrl;
  protected readonly contactPhone = APP_CONTACT_PHONE;
  protected readonly contactPhoneLink = APP_CONTACT_PHONE_LINK;
  protected readonly contactPhoneSecondary = APP_CONTACT_PHONE_SECONDARY;
  protected readonly contactPhoneSecondaryLink = APP_CONTACT_PHONE_SECONDARY_LINK;
  protected readonly contactEmail = APP_CONTACT_EMAIL;
  protected readonly contactEmailLink = APP_CONTACT_EMAIL_LINK;
  protected readonly contactWebsite = APP_CONTACT_WEBSITE;
  protected readonly contactWebsiteLink = APP_CONTACT_WEBSITE_LINK;
  protected readonly contactInstagram = APP_CONTACT_INSTAGRAM;
  protected readonly contactInstagramLink = APP_CONTACT_INSTAGRAM_LINK;

  protected readonly services = [
    'Construction',
    'Renovation',
    'Interior',
    'Plan Approval',
    'Estimation',
    'Project Management'
  ];

  protected readonly messageForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  protected sendViaWhatsApp(): void {
    if (this.messageForm.invalid) {
      return;
    }

    const { name, phone, email, message } = this.messageForm.getRawValue();
    const text = [
      `*New enquiry from the website*`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Message: ${message}`
    ].join('\n');

    window.open(`${APP_CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(text)}`, '_blank');
  }
}
