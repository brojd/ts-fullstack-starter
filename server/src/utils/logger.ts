import winston from 'winston';
import { isEnvProd, isEnvDev } from '@shared/utils/env';

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: isEnvProd() ? 'error' : 'debug'
    }),
    new winston.transports.File({ filename: 'debug.log', level: 'debug' })
  ]
};

const logger = winston.createLogger(options);

if (isEnvDev()) {
  logger.debug('Logging initialized at debug level');
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

export default logger;
