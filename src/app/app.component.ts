import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  perspective: string = 'user';

  togglePerspective() {
    this.perspective = this.perspective === 'user' ? 'owner' : 'user';
  }
}



