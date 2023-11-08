import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public router: Router) {}

  togglePerspective() {
    // Check the current route to determine the target perspective
    if (this.router.url === '/owner') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/owner']);
    }
  }

}
