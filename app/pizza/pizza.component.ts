import { Component } from '@angular/core';

import { Pizza } from './domain/pizza';
import { PizzaService } from './service/pizza.service';
import { PizzaFileService } from './service/pizzaFile.service';
import { PizzaFileSortedService } from './service/pizzaFileSorted.service';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css'],
  providers: [PizzaFileSortedService]
})
export class PizzaComponent {

  private pizzas: Pizza[];

  constructor(private pizzaService: PizzaFileSortedService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
