import {FC} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {Typography} from '../Typography';
type Props = {
  value: number;
};

export const SummaryCard: FC<Props> = ({value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.month}>
        <Typography color="white" weight="bold">
          Diciembre
        </Typography>
      </View>
      <View style={styles.summary}>
        <Typography color="white" size="extra" weight="bold">
          {value} pts
        </Typography>
      </View>
    </View>
  );
};
