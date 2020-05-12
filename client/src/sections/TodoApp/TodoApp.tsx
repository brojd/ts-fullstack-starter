import React, { FC } from 'react';
import { Heading, Box } from '@chakra-ui/core';
import TodoList from './TodoList/TodoList';

const TodoApp: FC = () => (
  <Box w="60%" mx="auto" my={80}>
    <Heading as="h2" color="tertiary.300" my={4}>
      TODOS:
    </Heading>
    <TodoList />
  </Box>
);

export default TodoApp;
