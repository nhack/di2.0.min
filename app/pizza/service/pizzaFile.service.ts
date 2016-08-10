import { Injectable, Inject, Optional } from '@angular/core';

import { LoggerService, LOGGER_SERVICE } from './logger.service';
import { PizzaService } from './pizza.service';

import { Pizza } from '../domain/pizza';
import { PIZZAS } from '../domain/data';

@Injectable()
export class PizzaFileService implements PizzaService {

  constructor( @Optional() @Inject(LOGGER_SERVICE) private logService: LoggerService) { }

  getPizzas(): Pizza[] {
    if (this.logService) this.logService.log('No sorting');
    return PIZZAS
  }
}
