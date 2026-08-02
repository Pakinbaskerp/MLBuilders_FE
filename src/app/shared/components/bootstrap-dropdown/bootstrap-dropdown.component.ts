import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationLink } from '../../../core/models/navigation.model';

@Component({
  selector: 'app-bootstrap-dropdown',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dropdown">
      <button class="btn btn-ml-outline dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{ label }}
      </button>
      <ul class="dropdown-menu">
        @for (item of items; track item.path) {
          <li>
            <a class="dropdown-item" [routerLink]="item.path">{{ item.label }}</a>
          </li>
        }
      </ul>
    </div>
  `
})
export class BootstrapDropdownComponent {
  @Input() label = 'Menu';
  @Input() items: NavigationLink[] = [];
}
