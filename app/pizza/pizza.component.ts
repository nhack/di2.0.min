import { Component } from '@angular/core';

import { Pizza } from './domain/pizza';
import { PizzaFileService } from './service/pizzaFile.service';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css'],
  providers: [PizzaFileService]
})
export class PizzaComponent {

  private pizzas: Pizza[];

  constructor(private pizzaService: PizzaFileService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
