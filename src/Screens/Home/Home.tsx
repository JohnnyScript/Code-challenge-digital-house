import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {styles} from './styles';
import {Screen} from '../../Components/Screen';
import {Button} from '../../Components/Button';
import {ItemList} from '../../Components/ItemList';
import {useProducts} from '../../Hooks/useProducts';
import {Typography} from '../../Components/Typography';
import {SummaryCard} from '../../Components/SummaryCard';

export const Home = () => {
  const {t} = useTranslation();
  const {products, points, filter, setFilter} = useProducts();

  return (
    <Screen>
      <Typography size="large" weight="bold">
        {t('welcome')}
      </Typography>
      <Typography margin="small">Johnny Pacheco</Typography>
      <Typography
        margin="large"
        color="gray"
        upperCase
        weight="bold"
        size="small">
        {t('yourPoints')}
      </Typography>
      <View style={styles.contentCard}>
        <SummaryCard value={points} />
      </View>
      <Typography
        margin="large"
        color="gray"
        upperCase
        weight="bold"
        size="small">
        {t('yourMovements')}
      </Typography>
      <ItemList products={products} />
      <View style={styles.containerButtons}>
        {filter && (
          <Button
            onPress={() => {
              setFilter(null);
            }}
            full>
            {t('allButtons')}
          </Button>
        )}
        {!filter && (
          <>
            <Button
              onPress={() => {
                setFilter('won');
              }}>
              {t('won')}
            </Button>
            <Button
              onPress={() => {
                setFilter('redeemed');
              }}>
              {t('redeemed')}
            </Button>
          </>
        )}
      </View>
    </Screen>
  );
};
