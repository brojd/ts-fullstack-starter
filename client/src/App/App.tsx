import React, { useEffect } from 'react';
import { dummyConsoleLog } from '@shared/utils/console';
import { getTodos } from '../api/todos';

const App = () => {
  useEffect(() => {
    getTodos().then(({ data: todos }) => {
      dummyConsoleLog(todos[0].text);
    });
  }, []);

  return <div>App</div>;
};

export default App;
