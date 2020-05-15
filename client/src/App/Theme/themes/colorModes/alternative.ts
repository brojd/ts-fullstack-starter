import { ThemeColors } from '../../Theme.types';
import base from '../base';

const { colors: baseColors } = base;

const alternative: ThemeColors = {
  ...baseColors,
  primary: baseColors.yellow,
  secondary: baseColors.green,
  tertiary: baseColors.cyan,
  positive: baseColors.telegram,
  neutral: baseColors.gray,
  warning: baseColors.orange,
  negative: baseColors.red,
  text: baseColors.whiteHues,
  textOpposite: baseColors.blackHues
};

export default alternative;
