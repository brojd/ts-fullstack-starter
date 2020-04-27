import { useContext } from 'react';
import { ColorModeContext } from './WithColorModeContext';

export const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  return {
    colorMode,
    setColorMode
  };
};
