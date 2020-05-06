import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import store from '@client/store/store';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout>
          <Routes />
        </Layout>
      </HashRouter>
    </Provider>
  );
};

export default App;
