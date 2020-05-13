import React, {
  FC,
  useState,
  useCallback,
  ChangeEvent,
  KeyboardEvent
} from 'react';
import { IconButton, Input, Flex } from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAsyncAction } from '@client/store/todos/todosSlice';
import { RootState } from '@client/store/store';
import { getIsLoading } from '@client/store/loading/loadingSelectors';

const AddTodo: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) =>
    getIsLoading(state, addTodoAsyncAction.type)
  );
  const [newTodo, updateNewTodo] = useState('');

  const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    updateNewTodo(event.target.value);
  }, []);

  const onAddTodo = useCallback(() => {
    dispatch(
      addTodoAsyncAction({ id: `${new Date().getTime()}`, text: newTodo })
    );
    updateNewTodo('');
  }, [dispatch, newTodo]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onAddTodo();
      }
    },
    [onAddTodo]
  );

  return (
    <Flex justify="space-between">
      <Input
        placeholder="Add todo"
        w="90%"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={newTodo}
        color="black"
      />
      <IconButton
        aria-label="Add todo"
        variantColor="positive"
        icon="add"
        onClick={onAddTodo}
        isLoading={isLoading}
        isDisabled={!newTodo}
      />
    </Flex>
  );
};

export default AddTodo;
