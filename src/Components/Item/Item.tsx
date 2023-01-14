import {Image, Text, View} from 'react-native';

import {styles} from './styles';
import {Typography} from '../Typography';

export const Item = () => {
  const won = true;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
        style={styles.image}
      />
      <View style={styles.data}>
        <Typography weight="bold" size="small">
          Nombre del producto
        </Typography>
        <Typography margin="medium" size="small">
          26 de enero, 2019
        </Typography>
      </View>
      <View style={styles.points}>
        <Typography weight="bold">
          <Text style={won ? styles.success : styles.alert}>+</Text>100
        </Typography>
        <Typography weight="bold">{'>'}</Typography>
      </View>
    </View>
  );
};
