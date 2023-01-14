import {FC} from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {Typography} from '../Typography';

export const SummaryCard: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.month}>
        <Typography color="white" weight="bold">
          Diciembre
        </Typography>
      </View>
      <View style={styles.summary}>
        <Typography color="white" size="extra" weight="bold">
          10,00.00 pts
        </Typography>
      </View>
    </View>
  );
};
