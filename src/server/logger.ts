import * as winston from 'winston';

const colors = {
  debug: 'cyan bold',
  info: 'yellow bold',
  error: 'red bold',
};

const format = winston.format.combine(winston.format.colorize(), winston.format.simple());

winston.addColors(colors);

export const logger = winston.createLogger({
  level: 'debug',
  format,
  transports: [
    new winston.transports.Console({
      level: 'debug',
      stderrLevels: ['error'],
      debugStdout: true,
    }),
  ],
});
