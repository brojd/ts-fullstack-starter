import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import todosSlice, {
  fetchTodosAsyncAction
} from '@client/store/todos/todosSlice';
import { getTodos } from '@client/store/todos/todosSelectors';
import { getIsLoading } from '@client/store/loading/loadingSelectors';
import { RootState } from '@client/store/store';
import { Box } from '@chakra-ui/core';
import TodoItem from './TodoItem/TodoItem';
import AddTodo from './AddTodo/AddTodo';
import Loading from '@client/components/Loading/Loading';

const TodoList: FC = () => {
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
    <Loading isLoading={isLoading}>
      {todos.length
        ? todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
        : 'No todos yet'}
      <Box textAlign="center" my={8}>
        <AddTodo />
      </Box>
    </Loading>
  );
};

export default TodoList;
