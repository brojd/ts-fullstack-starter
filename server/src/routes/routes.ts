import express from 'express';
import todosRouter from './todos/todos.router';

const router = express.Router();

router.use('/todos', todosRouter);

export default router;
