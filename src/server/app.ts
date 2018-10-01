import { json, urlencoded } from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';

import * as os from 'os';
import * as path from 'path';

const clientSource = path.join(__dirname, '../client');
const app: express.Application = express();
app.set('views', clientSource);

const rootRouter = express.Router();
rootRouter.use(json());
rootRouter.use(compression());
rootRouter.use(urlencoded({ extended: false }));

app.use(express.static(clientSource));

app.get('/api/getUsername', (req: express.Request, res: express.Response) =>
  res.send({ username: os.userInfo().username }),
);

export { app };
