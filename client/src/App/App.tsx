import React from 'react';
import { HashRouter } from 'react-router-dom';
import styles from './App.module.scss';
import './App.global.scss';
import { CSSReset, Box } from '@chakra-ui/core';
import Theme from './Theme/Theme';
import WithColorModeContext from './Theme/WithColorModeContext';
import ThemeSetter from './Theme/ThemeSetter';
import Header from './Header/Header';
import Routes from './Routes/Routes';

const App = () => {
  return (
    <WithColorModeContext>
      <Theme>
        <CSSReset />
        <Box
          bg="secondary.400"
          h="100vh"
          className={styles.root}
          color="text.500"
        >
          <HashRouter>
            <Header />
            <ThemeSetter />
            <Routes />
          </HashRouter>
        </Box>
      </Theme>
    </WithColorModeContext>
  );
};

export default App;
