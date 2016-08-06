import { Injectable } from '@angular/core';

import{ PizzaService } from './pizza.service';

import { Pizza } from '../domain/pizza';
import { PIZZAS } from '../domain/data';

@Injectable()
export class PizzaFileSortedService implements PizzaService {
  getPizzas(): Pizza[] {
    return PIZZAS.sort((p1, p2) => p1.price - p2.price);
  }
}
