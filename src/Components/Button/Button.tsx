import {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import {Props} from './types';
import {styles} from './styles';
import {Typography} from '../Typography';

export const Button: FC<Props> = ({children, full, outline, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, outline && styles.outline, full && styles.full]}
      onPress={onPress}>
      <Typography weight="bold" color="white">
        {children}
      </Typography>
    </TouchableOpacity>
  );
};
