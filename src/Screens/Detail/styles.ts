import {StyleSheet, Dimensions} from 'react-native';

import {
  WHITE,
  BLUE_LIGHT,
  BACKGROUND_APP_COLOR,
} from '../../Common/Constants/colors';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 1,
    backgroundColor: BACKGROUND_APP_COLOR,
  },
  header: {
    padding: 15,
    width: '100%',
    height: height * 0.16,
    backgroundColor: BLUE_LIGHT,
    justifyContent: 'flex-end',
  },
  contentImage: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.84,
    shadowRadius: 2.27,

    elevation: 6,
    borderRadius: 10,
    width: width - 30,
    height: width - 30,
  },
  image: {
    borderRadius: 10,
    width: width - 30,
    height: width - 30,
    backgroundColor: WHITE,
  },
  contentButton: {
    width: '100%',
    marginTop: 20,
  },
});
