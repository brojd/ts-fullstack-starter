import { ThemeColors } from '../../Theme.types';
import base from '../base';

const { colors: baseColors } = base;

const dark: ThemeColors = {
  ...baseColors,
  primary: baseColors.green,
  secondary: baseColors.blackHues,
  tertiary: baseColors.orange,
  positive: baseColors.teal,
  neutral: baseColors.gray,
  warning: baseColors.orange,
  negative: baseColors.red,
  text: baseColors.whiteHues,
  textOpposite: baseColors.blackHues
};

export default dark;
