import {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NumericFormat} from 'react-number-format';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {Typography} from '../Typography';
import {Product} from '../../Common/Types';
import {getDateFormat} from '../../Common/Utils/dates';

type Props = {
  product: Product;
};

export const Item: FC<Props> = ({product: p}) => {
  const {navigate} = useNavigation();
  const won = !p.is_redemption;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate('Detail' as never, p as never);
      }}>
      <Image
        source={{
          uri: p.image,
        }}
        style={styles.image}
      />
      <View style={styles.data}>
        <Typography weight="bold" size="small">
          {p.product}
        </Typography>
        <Typography margin="medium" size="small">
          {getDateFormat(p.createdAt)}
        </Typography>
      </View>
      <View style={styles.points}>
        <NumericFormat
          value={p.points}
          thousandSeparator
          decimalSeparator="."
          displayType={'text'}
          renderText={(valueFormated: string) => (
            <Typography weight="bold">
              <Text style={won ? styles.success : styles.alert}>
                {won ? '+ ' : '- '}
              </Text>
              {valueFormated}
            </Typography>
          )}
        />

        <Typography weight="bold">{'>'}</Typography>
      </View>
    </TouchableOpacity>
  );
};
