import * as http from 'http';
import { AddressInfo } from 'net';

import { app } from './app';
import { logger } from './logger';

const server = http.createServer(app);
server.listen(process.env.PORT || 8080);
server.on('listening', () =>
  logger.info(`Listening on port ${(server.address() as AddressInfo).port} in ${app.get('env')} mode.`),
);
