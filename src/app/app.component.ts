import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  togglePerspective() {
    // Check the current route to determine the target perspective
    if (this.router.url === '/owner') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/owner']);
    }
  }
}




