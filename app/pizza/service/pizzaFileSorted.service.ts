import { Injectable, Inject, Optional } from '@angular/core';

import{ PizzaService } from './pizza.service';
import { LoggerService, LOGGER_SERVICE } from './logger.service';

import { Pizza } from '../domain/pizza';
import { PIZZAS } from '../domain/data';

@Injectable()
export class PizzaFileSortedService implements PizzaService {

  constructor( @Optional() @Inject(LOGGER_SERVICE) private logService: LoggerService) { }

  getPizzas(): Pizza[] {
    this.logService.log('Sorting by price');
    return PIZZAS.sort((p1, p2) => p1.price - p2.price);
  }
}
