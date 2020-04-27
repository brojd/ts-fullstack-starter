import { ThemeColors } from '../../Theme.types';
import base from '../base';

const { colors: baseColors } = base;

const light: ThemeColors = {
  ...baseColors,
  primary: baseColors.cyan,
  secondary: baseColors.whiteHues,
  tertiary: baseColors.gray,
  positive: baseColors.green,
  neutral: baseColors.gray,
  warning: baseColors.orange,
  negative: baseColors.red,
  text: baseColors.blackHues,
  textOpposite: baseColors.whiteHues
};

export default light;
