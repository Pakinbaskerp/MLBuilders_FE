import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-modal',
  standalone: true,
  templateUrl: './bootstrap-modal.component.html',
  styleUrl: './bootstrap-modal.component.scss'
})
export class BootstrapModalComponent {
  @Input() modalId = 'mlModal';
  @Input() title = 'Modal Title';
  @Input() actionText = 'Confirm';
}
