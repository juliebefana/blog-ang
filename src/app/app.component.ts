import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  perspective: string = 'User';

  togglePerspective() {
    this.perspective = this.perspective === 'User' ? 'Owner' : 'User';
  }
}



