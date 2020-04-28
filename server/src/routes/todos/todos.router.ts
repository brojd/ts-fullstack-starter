import express from 'express';
import { Todo } from '@shared/types/todo';

const router = express.Router();

let todos: Todo[] = [];

router.get('/api/todos', (_req, res) => {
  res.send(todos);
});

router.post('/api/todos', (req, res) => {
  todos.push(req.body);
  res.send(todos);
});

router.delete('/api/todos/:id', (req, res) => {
  todos = todos.filter(todo => req.params.id !== todo.id);
  res.send(todos);
});

router.put('/api/todos/:id', (req, res) => {
  const updatedTodo = req.body;
  todos = todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo));
  res.send(todos);
});

export default router;
