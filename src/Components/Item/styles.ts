import {StyleSheet} from 'react-native';
import {ALERT, SUCCESS} from '../../Common/Constants/colors';

const HEIGHT = 60;
const PADDING = 10;

export const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    padding: PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  image: {
    borderRadius: 10,
    width: HEIGHT - PADDING,
    height: HEIGHT - PADDING,
  },
  data: {
    width: '60%',
    height: '100%',
  },
  points: {
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  success: {
    color: SUCCESS,
  },
  alert: {
    color: ALERT,
  },
});
