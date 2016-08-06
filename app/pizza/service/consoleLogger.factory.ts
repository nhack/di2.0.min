import {ConsoleLoggerService} from './consoleLogger.service';

export let logLevelConsoleFactory = () => new ConsoleLoggerService(console.log.bind(console));
export let errorLevelConsoleFactory = () => new ConsoleLoggerService(console.error.bind(console));
