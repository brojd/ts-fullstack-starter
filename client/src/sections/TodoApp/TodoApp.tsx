import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodosAsyncAction } from '@client/store/todos/todosSlice';

const TodoApp: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosAsyncAction());
  }, [dispatch]);

  return <>todo app route</>;
};

export default TodoApp;
