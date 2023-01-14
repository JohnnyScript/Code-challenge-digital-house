import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import {styles} from './styles';
import {Button} from '../../Components/Button';
import {ItemList} from '../../Components/ItemList';
import {Typography} from '../../Components/Typography';
import {SummaryCard} from '../../Components/SummaryCard';

export const Home = () => {
  const {t} = useTranslation();
  return (
    <View>
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
        <SummaryCard />
      </View>
      <Typography
        margin="large"
        color="gray"
        upperCase
        weight="bold"
        size="small">
        {t('yourMovements')}
      </Typography>
      <ItemList />
      <View style={styles.containerButtons}>
        <Button onPress={() => {}} full>
          Todos
        </Button>
        {/* <Button onPress={() => {}} outline>
          Canjeados
        </Button> */}
      </View>
    </View>
  );
};
