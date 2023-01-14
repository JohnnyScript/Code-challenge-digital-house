import {StyleSheet, Dimensions} from 'react-native';

import {WHITE} from '../../Common/Constants/colors';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  view: {
    width: '100%',
    borderRadius: 10,
    height: height * 0.41,
    backgroundColor: WHITE,
  },
  scrollContent: {
    paddingTop: 15,
    paddingBottom: 10,
  },
});
