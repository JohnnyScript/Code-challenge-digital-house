import {View} from 'react-native';
import {FC, ReactNode} from 'react';

import {styles} from './styles';

type Props = {
  children: ReactNode;
};

export const Screen: FC<Props> = ({children}) => (
  <View style={styles.container}>{children}</View>
);
