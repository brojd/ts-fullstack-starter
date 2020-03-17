import axios, { AxiosResponse } from 'axios';
import { Todo } from 'shared/src/types/todo';

export const getTodos = () =>
  axios.get<undefined, AxiosResponse<Todo[]>>('/api/todos');
