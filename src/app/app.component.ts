import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'protractor-typescript-cucumber';
  count = 0;

  increase() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
}
