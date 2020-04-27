import React, {
  useState,
  createContext,
  useMemo,
  FC,
  useCallback
} from 'react';
import { ColorMode, ColorModeContextValue } from './Theme.types';

const COLOR_MODE = 'colorMode';

const getColorModeFromLS = () =>
  (localStorage.getItem(COLOR_MODE) as ColorMode) || ColorMode.LIGHT;

export const ColorModeContext = createContext<ColorModeContextValue>({
  colorMode: getColorModeFromLS(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setColorMode: () => {}
});

const WithColorModeContext: FC = props => {
  const [colorModeInState, setColorModeInState] = useState<ColorMode>(
    getColorModeFromLS()
  );

  const setColorMode = useCallback((colorMode: ColorMode) => {
    localStorage.setItem(COLOR_MODE, colorMode);
    setColorModeInState(colorMode);
  }, []);

  const value = useMemo(
    () => ({
      colorMode: colorModeInState,
      setColorMode: (colorMode: ColorMode) => {
        setColorMode(colorMode);
      }
    }),
    [colorModeInState, setColorMode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      {props.children}
    </ColorModeContext.Provider>
  );
};

export default WithColorModeContext;
