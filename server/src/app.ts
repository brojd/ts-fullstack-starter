import 'module-alias/register';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import logger from './utils/logger';
import httpLogger from './middlewares/httpLogger';
import router from './routes/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);
app.use(httpLogger);

app.use('/api', router);

const port = process.env.PORT || 9000;
app.listen(port, () => logger.debug(`Example app listening on port ${port}!`));
