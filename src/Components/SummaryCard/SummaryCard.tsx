import {FC} from 'react';
import {View} from 'react-native';
import {NumericFormat} from 'react-number-format';

import {styles} from './styles';
import {Typography} from '../Typography';
type Props = {
  value: number;
};

export const SummaryCard: FC<Props> = ({value}) => (
  <View style={styles.container}>
    <View style={styles.month}>
      <Typography color="white" weight="bold">
        Diciembre
      </Typography>
    </View>
    <View style={styles.summary}>
      <NumericFormat
        value={value}
        thousandSeparator
        decimalSeparator="."
        displayType={'text'}
        renderText={(valueFormated: string) => (
          <Typography color="white" size="extra" weight="bold">
            {valueFormated} pts
          </Typography>
        )}
      />
    </View>
  </View>
);
