import log4js from 'log4js';
import { LOG_FILENAME } from './config.js';

log4js.configure({
  appenders: { info: { type: 'file', filename: LOG_FILENAME } },
  categories: { default: { appenders: ['info'], level: 'error' } },
});
const logger = log4js.getLogger();
logger.level = 'info';

export default logger;
