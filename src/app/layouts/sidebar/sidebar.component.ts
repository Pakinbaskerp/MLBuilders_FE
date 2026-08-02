import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="d-none">
      Sidebar base component reserved for future dashboard or admin extensions.
    </aside>
  `
})
export class SidebarComponent {}
