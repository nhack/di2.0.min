import { LoggerService } from './logger.service';

export class ConsoleLoggerService implements LoggerService {
  constructor(private logLevel: (message?: any, ...optionalParams: any[]) => void) { }

  log(message: String) {
    this.logLevel(message);
  }
}
