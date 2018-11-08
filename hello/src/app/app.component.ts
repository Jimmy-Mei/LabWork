import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello {{name}}</h1>
  `,
  styles: []
})
export class AppComponent {
  name = 'Android';
}
