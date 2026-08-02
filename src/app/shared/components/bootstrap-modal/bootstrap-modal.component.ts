import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bootstrap-modal',
  standalone: true,
  template: `
    <div class="modal fade" [id]="modalId" tabindex="-1" [attr.aria-labelledby]="modalId + 'Label'" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title fs-5" [id]="modalId + 'Label'">{{ title }}</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ng-content />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-ml-outline" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-ml-primary">{{ actionText }}</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BootstrapModalComponent {
  @Input() modalId = 'mlModal';
  @Input() title = 'Modal Title';
  @Input() actionText = 'Confirm';
}
