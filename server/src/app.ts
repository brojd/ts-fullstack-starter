import 'module-alias/register';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Todo } from '@shared/types/todo';
import logger from './utils/logger';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);

app.get('/api/todos', (_req, res) => {
  const todos: Todo[] = [{ id: '1', text: 'todo1' }];
  logger.debug('aaa');
  res.send(todos);
});

const port = 9000;
app.listen(port, () => logger.debug(`Example app listening on port ${port}!`));
