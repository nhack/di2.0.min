import {Component} from '@angular/core';
  
import {Pizza} from './domain/pizza';
import {PIZZAS} from './domain/data';

@Component({
  selector: 'pizzas',
  templateUrl: 'app/pizzas/pizzas.component.html',
  styleUrls: ['app/pizzas/pizzas.component.css']
})
export class PizzasComponent {

  private pizzas: Pizza[];

  constructor() {
    this.pizzas = PIZZAS;
  }
}
