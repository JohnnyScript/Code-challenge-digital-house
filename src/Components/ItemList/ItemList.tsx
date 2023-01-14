import {FC} from 'react';
import {ScrollView} from 'react-native';

import {styles} from './styles';
import {Item} from '../Item/Item';
import {Product} from '../../Common/Types';

type Props = {
  products: Product[];
};

export const ItemList: FC<Props> = ({products}) => (
  <ScrollView style={styles.view} contentContainerStyle={styles.scrollContent}>
    {products.map(product => (
      <Item key={`product-${product.id}`} product={product} />
    ))}
  </ScrollView>
);
