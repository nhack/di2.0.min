import {Injectable} from '@angular/core';

import { Pizza } from '../domain/pizza';
import { PIZZAS } from '../domain/data';

@Injectable()
export class PizzaFileService {
  getPizzas(): Pizza[] {
    return PIZZAS
  }
}
