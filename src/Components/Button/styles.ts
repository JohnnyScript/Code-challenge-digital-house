import {StyleSheet} from 'react-native';

import {BLUE, WHITE} from '../../Common/Constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '48.7%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: BLUE,
    alignItems: 'center',
    backgroundColor: BLUE,
    justifyContent: 'center',
  },
  outline: {
    backgroundColor: WHITE,
  },
  full: {
    width: '100%',
  },
});
