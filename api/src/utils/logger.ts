import { createLogger, format, transports } from 'winston'
import { IS_PRODUCTION } from '@/environment'

const consoleOptions: transports.ConsoleTransportOptions = {
  level: IS_PRODUCTION ? 'info' : 'debug',
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf((data) => {
      const { timestamp, level, message, ...rest } = data
      return `${timestamp} [${level}]: ${message} ${Object.keys(rest).length ? JSON.stringify(rest) : ''}`
    }),
  ),
}

export const logger = createLogger({
  transports: [
    new transports.Console(consoleOptions),
    new transports.File({
      filename: 'logs/errors.log',
      level: 'error',
      format: format.combine(format.timestamp(), format.prettyPrint()),
    }),
    new transports.File({
      level: 'info',
      filename: 'logs/combined.log',
      format: format.combine(format.timestamp(), format.prettyPrint()),
    }),
  ],
  exceptionHandlers: [
    new transports.Console(consoleOptions),
    new transports.File({
      filename: 'logs/exceptions.log',
    }),
  ],
})
