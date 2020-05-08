import axios, { AxiosResponse } from 'axios';
import { Todo } from '@shared/types/todo';

export const fetchTodos = () =>
  axios
    .get<undefined, AxiosResponse<Todo[]>>('/api/todos')
    .then(({ data }) => data);
