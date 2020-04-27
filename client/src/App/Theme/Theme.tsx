import React, { FC } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { useColorMode } from './Theme.hooks';
import { ColorMode, ColorModeMap } from './Theme.types';
import base from './themes/base';

export const getTheme = (colorMode: ColorMode) => ({
  ...base,
  colors: {
    ...base.colors,
    ...ColorModeMap[colorMode]
  }
});

const Theme: FC = props => {
  const { colorMode } = useColorMode();
  return (
    <ThemeProvider theme={getTheme(colorMode)}>
      <CSSReset />
      {props.children}
    </ThemeProvider>
  );
};

export default Theme;
