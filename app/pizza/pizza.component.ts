import {Component} from '@angular/core';

import {Pizza} from './domain/pizza';
import {PIZZAS} from './domain/data';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css']
})
export class PizzaComponent {

  private pizzas: Pizza[];

  constructor() {
    this.pizzas = PIZZAS;
  }
}
