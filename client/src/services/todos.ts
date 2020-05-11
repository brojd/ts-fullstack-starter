import { Todo } from '@shared/types/todo';
import client from './client';

export const fetchTodos = () => client.get<undefined, Todo[]>('/todos');
