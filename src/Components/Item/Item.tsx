import {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {Typography} from '../Typography';
import {Product} from '../../Common/Types';

type Props = {
  product: Product;
};

export const Item: FC<Props> = ({product: p}) => {
  const won = !p.is_redemption;

  return (
    <TouchableOpacity style={styles.container}>
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
          {p.createdAt}
        </Typography>
      </View>
      <View style={styles.points}>
        <Typography weight="bold">
          <Text style={won ? styles.success : styles.alert}>
            {won ? '+' : '-'}
          </Text>
          {p.points}
        </Typography>
        <Typography weight="bold">{'>'}</Typography>
      </View>
    </TouchableOpacity>
  );
};
