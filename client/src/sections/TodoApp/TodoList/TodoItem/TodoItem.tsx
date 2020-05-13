import React, { FC, useCallback } from 'react';
import { Todo } from '@shared/types/todo';
import { Flex, IconButton, Tooltip, Button } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodoAsyncAction,
  editTodoAsyncAction
} from '@client/store/todos/todosSlice';
import { getCurrentlyDeletingTodoId } from '@client/store/todos/todosSelectors';

interface TodoProps {
  todo: Todo;
}

const TodoItem: FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const isDeletePending = useSelector(getCurrentlyDeletingTodoId) === todo.id;

  const onDeleteClick = useCallback(() => {
    dispatch(deleteTodoAsyncAction(todo.id));
  }, [dispatch, todo]);

  const onTodoItemClick = useCallback(() => {
    dispatch(editTodoAsyncAction({ ...todo, isDone: !todo.isDone }));
  }, [dispatch, todo]);

  const tooltipText = `Click to mark as ${todo.isDone ? 'ToDo' : 'Done'}`;

  return (
    <Flex justify="space-between" align="center" my={4}>
      <Tooltip label={tooltipText} aria-label={tooltipText} placement="left">
        <Button
          variantColor="primary"
          w="90%"
          p={2}
          rounded={4}
          onClick={onTodoItemClick}
          cursor="pointer"
          justifyContent="start"
        >
          {todo.text}
        </Button>
      </Tooltip>
      {todo.isDone && (
        <IconButton
          variant="ghost"
          variantColor="positive"
          icon="check"
          aria-label="Is todo done"
        />
      )}
      <IconButton
        variantColor="negative"
        icon="delete"
        aria-label="Delete todo"
        onClick={onDeleteClick}
        isLoading={isDeletePending}
      />
    </Flex>
  );
};

export default TodoItem;
