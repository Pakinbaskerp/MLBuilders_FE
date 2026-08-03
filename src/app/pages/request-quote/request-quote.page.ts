import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageLayoutComponent } from '../../layouts/page-layout/page-layout.component';
import { BootstrapModalComponent } from '../../shared/components/bootstrap-modal/bootstrap-modal.component';

@Component({
  selector: 'app-request-quote-page',
  standalone: true,
  imports: [ReactiveFormsModule, PageLayoutComponent, BootstrapModalComponent],
  templateUrl: './request-quote.page.html',
  styleUrl: './request-quote.page.scss'
})
export class RequestQuotePageComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly quoteForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });
}
