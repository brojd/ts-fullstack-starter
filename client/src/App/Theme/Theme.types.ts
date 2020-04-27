import { ColorHues } from '@chakra-ui/core';
import light from './themes/colorModes/light';
import alternative from './themes/colorModes/alternative';
import dark from './themes/colorModes/dark';

export enum ColorMode {
  LIGHT = 'light',
  ALTERNATIVE = 'alternative',
  DARK = 'dark'
}

export const ColorModeMap = {
  [ColorMode.LIGHT]: light,
  [ColorMode.ALTERNATIVE]: alternative,
  [ColorMode.DARK]: dark
};

export type ColorModeContextValue = {
  colorMode: ColorMode;
  setColorMode: (colorMode: string) => void;
};

export type ThemeColors<C = ColorHues | string> = {
  primary: C;
  secondary: C;
  tertiary: C;
  warning: C;
  negative: C;
  positive: C;
  neutral: C;
  text: C;
  textOpposite: C;
};
