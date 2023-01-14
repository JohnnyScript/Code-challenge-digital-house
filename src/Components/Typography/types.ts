import {DefaultTFuncReturn} from 'i18next';

type WeightTypography = 'normal' | 'bold';
type ColorTypography = 'white' | 'gray' | 'black';
type SizeTypography = 'small' | 'medium' | 'large' | 'extra';
type MarginTypography = 'small' | 'medium' | 'large';

export type Props = {
  children: string | Element | DefaultTFuncReturn;
  weight?: WeightTypography;
  color?: ColorTypography;
  upperCase?: boolean;
  size?: SizeTypography;
  margin?: MarginTypography;
};

export type Rules = {
  weight?: WeightTypography;
  color?: ColorTypography;
  upperCase?: boolean;
  size?: SizeTypography;
  margin?: MarginTypography;
};
