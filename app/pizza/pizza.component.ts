import { Component, provide, Inject } from '@angular/core';

import { Pizza } from './domain/pizza';
import { PizzaService, PIZZA_SERVICE } from './service/pizza.service';
import { PizzaFileService } from './service/pizzaFile.service';
import { PizzaFileSortedService } from './service/pizzaFileSorted.service';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css'],
  providers: [provide(PIZZA_SERVICE, { useClass: PizzaFileService })]
})
export class PizzaComponent {

  private pizzas: Pizza[];

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: PizzaService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
