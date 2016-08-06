import { Injectable } from '@angular/core';

import { Pizza } from '../domain/pizza';
import { PIZZAS } from '../domain/data';

@Injectable()
export class PizzaFileSortedService {
  getPizzas(): Pizza[] {
    return PIZZAS.sort((p1, p2) => p1.price - p2.price);
  }
}
