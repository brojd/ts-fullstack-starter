import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import todosSlice, {
  fetchTodosAsyncAction
} from '@client/store/todos/todosSlice';
import { getTodos } from '@client/store/todos/todosSelectors';
import { getIsLoading } from '@client/store/loading/loadingSelectors';
import { RootState } from '@client/store/store';
import { Spinner } from '@chakra-ui/core';

const TodoApp: FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos, shallowEqual);
  const isLoading = useSelector((state: RootState) =>
    getIsLoading(state, fetchTodosAsyncAction.type)
  );

  useEffect(() => {
    dispatch(fetchTodosAsyncAction());
    return () => {
      dispatch(todosSlice.actions.reset());
    };
  }, [dispatch]);

  return (
    <>
      <div>TODOS:</div>
      {isLoading && <Spinner />}
      {todos.map(todo => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
};

export default TodoApp;
