import {StyleSheet, Dimensions} from 'react-native';

import {BLUE} from '../../Common/Constants/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    width: width * 0.727,
    height: width * 0.35,
    backgroundColor: BLUE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.84,
    shadowRadius: 4.27,

    elevation: 4,
  },
  month: {
    top: 20,
    left: 20,
    position: 'absolute',
  },
  summary: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
