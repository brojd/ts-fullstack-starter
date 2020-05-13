import { Todo } from '@shared/types/todo';
import client from './client';

export const fetchTodos = () => client.get<undefined, Todo[]>('/todos');

export const addTodo = (newTodo: Todo) =>
  client.post<Todo, Todo[]>('/todos', newTodo);

export const editTodo = (newTodo: Todo) =>
  client.put<Todo, Todo[]>(`/todos/${newTodo.id}`, newTodo);

export const deleteTodo = (id: Todo['id']) =>
  client.delete<undefined, Todo[]>(`/todos/${id}`);
