import React, { useEffect } from 'react';
import { dummyConsoleLog } from '@shared/utils/console';
import styles from './App.modules.scss';
import './App.global.scss';
import { getTodos } from '../api/todos';

const App = () => {
  useEffect(() => {
    getTodos().then(({ data: todos }) => {
      dummyConsoleLog(todos[0].text);
    });
  }, []);

  return (
    <main>
      <h1>App</h1>
      <p className={styles.pink}>some pink text using CSS Modules</p>
    </main>
  );
};

export default App;
