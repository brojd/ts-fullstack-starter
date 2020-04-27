import { ThemeColors } from '../../Theme.types';
import base from '../base';

const { colors: baseColors } = base;

const light: ThemeColors = {
  ...baseColors,
  primary: baseColors.red,
  secondary: baseColors.green,
  tertiary: baseColors.cyan,
  positive: baseColors.green,
  neutral: baseColors.gray,
  warning: baseColors.orange,
  negative: baseColors.red,
  text: baseColors.whiteHues,
  textOpposite: baseColors.blackHues
};

export default light;
