import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchTodosAsyncAction } from '@client/store/todos/todosSlice';
import { getTodos } from '@client/store/todos/todosSelectors';

const TodoApp: FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos, shallowEqual);

  useEffect(() => {
    dispatch(fetchTodosAsyncAction());
  }, [dispatch]);

  return (
    <>
      <div>TODOS:</div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
};

export default TodoApp;
