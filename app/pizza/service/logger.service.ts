import { OpaqueToken } from '@angular/core';

export interface LoggerService {
  log(message: String);
}

export let LOGGER_SERVICE = new OpaqueToken('app.logger.service');
