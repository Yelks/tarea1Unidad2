import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  num_1!:number;
  num_2!:number;
  resultado!:number;

  suma():void
  {
    this.resultado = this.num_1 + this.num_2;
  }

  resta():void
  {
    this.resultado = this.num_1 - this.num_2;
  }

  multi():void
  {
    this.resultado = this.num_1 * this.num_2;
  }

  division():void
  {
    this.resultado = this.num_1 / this.num_2;
  }

}
