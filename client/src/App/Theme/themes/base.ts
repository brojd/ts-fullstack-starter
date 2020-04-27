import { theme as defaultTheme, ColorHues } from '@chakra-ui/core';

const generateHuesForOneColor = (cl: string): ColorHues =>
  [100, 200, 300, 400, 500, 600, 700, 800, 900].reduce<ColorHues>(
    (acc, hue) => ({ ...acc, [hue]: cl }),
    {} as ColorHues
  );

const base = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    whiteHues: generateHuesForOneColor(defaultTheme.colors.white),
    blackHues: generateHuesForOneColor(defaultTheme.colors.black)
  }
};

export default base;
