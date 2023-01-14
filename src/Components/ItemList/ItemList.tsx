import {ScrollView} from 'react-native';

import {styles} from './styles';
import {Item} from '../Item/Item';

export const ItemList = () => {
  return (
    <ScrollView
      style={styles.view}
      contentContainerStyle={styles.scrollContent}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </ScrollView>
  );
};
