import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@client/sections/Home/Home';
import TodoApp from '@client/sections/TodoApp/TodoApp';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/todo-app">
        <TodoApp />
      </Route>
    </Switch>
  );
};

export default Routes;
