import morgan from 'morgan';
import logger from '@server/utils/logger';
import { isEnvProd } from '@shared/utils/env';

export default morgan(isEnvProd() ? 'combined' : 'short', {
  stream: {
    write: message =>
      logger.info(message.substring(0, message.lastIndexOf('\n')))
  }
});
