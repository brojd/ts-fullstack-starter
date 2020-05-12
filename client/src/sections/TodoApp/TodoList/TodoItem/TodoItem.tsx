import React, { FC, useCallback } from 'react';
import { Todo } from '@shared/types/todo';
import { Box, Flex, IconButton } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAsyncAction } from '@client/store/todos/todosSlice';
import { getCurrentlyDeletingTodoId } from '@client/store/todos/todosSelectors';

interface TodoProps {
  todo: Todo;
}

const TodoItem: FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getCurrentlyDeletingTodoId) === todo.id;

  const onDeleteClick = useCallback(() => {
    dispatch(deleteTodoAsyncAction(todo.id));
  }, [dispatch, todo]);

  return (
    <Flex justify="space-between" align="center" my={4}>
      <Box bg="primary.400" w="90%" p={2} rounded={4}>
        {todo.text}
      </Box>
      <IconButton
        variantColor="negative"
        icon="delete"
        aria-label="Delete todo"
        onClick={onDeleteClick}
        isLoading={isLoading}
      />
    </Flex>
  );
};

export default TodoItem;
