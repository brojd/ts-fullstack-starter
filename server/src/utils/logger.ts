import winston from 'winston';
import { isEnvProd, isEnvDev } from '@shared/utils/env';

const options: winston.LoggerOptions = {
  transports: [
    new winston.transports.Console({
      level: isEnvProd() ? 'error' : 'info',
      format: winston.format.simple()
    }),
    new winston.transports.File({ filename: 'debug.log', level: 'debug' })
  ]
};

const logger = winston.createLogger(options);

if (isEnvDev()) {
  logger.info('Logging initialized at info level');
}

export default logger;
