import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Todo } from '@shared/types/todo';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 })
);

app.get('/api/todos', (_req, res) => {
  const todos: Todo[] = [{ id: '1', text: 'todo1' }];
  res.send(todos);
});

const port = 9000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
