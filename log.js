import pino from 'pino';
import expressPino from 'express-pino-logger';
import * as config from "./config.js";

export const logger = pino({ level: config.logLevel });
export const expressLogger = expressPino({ logger });