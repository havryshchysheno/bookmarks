import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<app-bookmarks></app-bookmarks>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmarks';
}
