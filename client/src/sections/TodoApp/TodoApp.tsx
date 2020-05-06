import React, { FC, useEffect } from 'react';
import { getTodos } from '@client/services/todos';
import { dummyConsoleLog } from '@shared/utils/console';

const TodoApp: FC = () => {
  useEffect(() => {
    getTodos().then(({ data: todos }) => {
      dummyConsoleLog(todos[0].text);
    });
  }, []);

  return <>todo app route</>;
};

export default TodoApp;
