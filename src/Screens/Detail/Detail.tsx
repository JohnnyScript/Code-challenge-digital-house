import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, StatusBar, View} from 'react-native';

import {styles} from './styles';
import {Product} from '../../Common/Types';
import {Screen} from '../../Components/Screen';
import {Typography} from '../../Components/Typography';
import {BLUE_LIGHT} from '../../Common/Constants/colors';
import {Button} from '../../Components/Button';
import {getDateFormat} from '../../Common/Utils/dates';

type Props = {
  route: {
    params: Product;
  };
  navigation: {
    goBack: () => void;
  };
};

export const Detail: FC<Props> = ({route, navigation}) => {
  const {t} = useTranslation();
  const p = route.params;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={BLUE_LIGHT} />
      <View style={styles.header}>
        <Typography size="big" weight="bold">
          {p.product}
        </Typography>
      </View>
      <Screen>
        <View style={styles.contentImage}>
          <Image
            style={styles.image}
            source={{
              uri: p.image,
            }}
          />
        </View>
        <Typography margin="large" color="gray" weight="bold" size="small">
          {t('detailsProduct')}
        </Typography>
        <Typography weight="bold">{`${t('boughtOn')} ${getDateFormat(
          p.createdAt,
        )}`}</Typography>
        <Typography margin="large" color="gray" weight="bold" size="small">
          {t('accumulate')}
        </Typography>
        <Typography weight="bold" size="large">{`${p.points} ${t(
          'points',
        )}`}</Typography>
        <View style={styles.contentButton}>
          <Button onPress={navigation.goBack} full>
            {t('agree')}
          </Button>
        </View>
      </Screen>
    </View>
  );
};
