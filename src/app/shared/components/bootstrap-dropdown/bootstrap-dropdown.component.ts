import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationLink } from '../../../core/models/navigation.model';

@Component({
  selector: 'app-bootstrap-dropdown',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bootstrap-dropdown.component.html',
  styleUrl: './bootstrap-dropdown.component.scss'
})
export class BootstrapDropdownComponent {
  @Input() label = 'Menu';
  @Input() items: NavigationLink[] = [];
}
