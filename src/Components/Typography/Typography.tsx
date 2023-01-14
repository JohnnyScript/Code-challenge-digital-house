import {FC} from 'react';
import {Text} from 'react-native';

import {Props} from './types';
import {buildStyles} from './styles';

export const Typography: FC<Props> = ({
  children,
  weight = 'normal',
  upperCase,
  color,
  size,
  margin,
}) => {
  return (
    <Text
      style={buildStyles({
        weight,
        upperCase,
        color,
        size,
        margin,
      })}>
      {children as string}
    </Text>
  );
};
