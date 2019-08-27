import { Component } from '@angular/core';

@Component({
  selector: 'gp-root',
  template: `
    <div><h1>{{titulo}}</h1></div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Angular: Iniciando';
}
