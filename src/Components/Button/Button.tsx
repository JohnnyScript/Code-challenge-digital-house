import {FC} from 'react';
import {TouchableOpacity} from 'react-native';

import {Props} from './types';
import {styles} from './styles';
import {Typography} from '../Typography';

export const Button: FC<Props> = ({children, full, onPress}) => (
  <TouchableOpacity
    style={[styles.container, full && styles.full]}
    onPress={onPress}>
    <Typography weight="bold" color="white">
      {children}
    </Typography>
  </TouchableOpacity>
);
