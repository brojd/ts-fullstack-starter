import express from 'express';
import { Todo } from '@shared/types/todo';

const router = express.Router();

let todos: Todo[] = [];

router.get('/', (_req, res) => {
  res.send(todos);
});

router.post('/', (req, res) => {
  todos.push(req.body);
  res.send(todos);
});

router.delete('/:id', (req, res) => {
  todos = todos.filter(todo => req.params.id !== todo.id);
  res.send(todos);
});

router.put('/:id', (req, res) => {
  const updatedTodo = req.body;
  todos = todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
  res.send(todos);
});

export default router;
