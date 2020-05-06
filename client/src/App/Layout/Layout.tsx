import React, { FC } from 'react';
import { CSSReset, Box } from '@chakra-ui/core';
import WithColorModeContext from '../Theme/WithColorModeContext';
import Theme from '../Theme/Theme';
import Header from './Header/Header';
import ThemeSetter from '../Theme/ThemeSetter';
import Footer from './Footer/Footer';

const Layout: FC = ({ children }) => {
  return (
    <WithColorModeContext>
      <Theme>
        <CSSReset />
        <Box bg="secondary.400" h="100vh" color="text.500">
          <Header />
          <ThemeSetter />
          {children}
          <Footer />
        </Box>
      </Theme>
    </WithColorModeContext>
  );
};

export default Layout;
