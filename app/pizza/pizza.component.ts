import { Component, provide, Inject } from '@angular/core';

import { Pizza } from './domain/pizza';
import { PizzaService, PIZZA_SERVICE } from './service/pizza.service';
import { PizzaFileService } from './service/pizzaFile.service';
import { PizzaFileSortedService } from './service/pizzaFileSorted.service';

import { LOGGER_SERVICE } from './service/logger.service';
import { logLevelConsoleFactory, errorLevelConsoleFactory } from './service/consoleLogger.factory';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css'],
  providers: [provide(PIZZA_SERVICE, { useClass: PizzaFileService }),
  provide(LOGGER_SERVICE, { useFactory: errorLevelConsoleFactory })]
})
export class PizzaComponent {

  private pizzas: Pizza[];

  constructor( @Inject(PIZZA_SERVICE) private pizzaService: PizzaService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
