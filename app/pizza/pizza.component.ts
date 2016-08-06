import { Component } from '@angular/core';

import { Pizza } from './domain/pizza';
import { PizzaFileService } from './service/pizzaFile.service';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css']
})
export class PizzaComponent {

  private pizzas: Pizza[];
  private pizzaService: PizzaFileService = new PizzaFileService();

  constructor() {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
