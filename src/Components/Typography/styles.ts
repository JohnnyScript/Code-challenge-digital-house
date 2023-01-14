import {StyleSheet} from 'react-native';

import {Rules} from './types';

export const styles = StyleSheet.create({
  default: {
    fontFamily: 'AvenirLTStd-Book',
  },
  bold: {
    fontFamily: 'AvenirLTStd-Black',
    fontWeight: 'bold',
  },
  upperCase: {
    textTransform: 'uppercase',
  },
});

const colors = {
  gray: '#9b9898',
  white: '#ffffff',
  black: '#020202',
};

const sizes = {
  small: 12,
  medium: 15,
  large: 17,
  extra: 32,
};

const margins = {
  small: 5,
  medium: 9,
  large: 17,
};

export const buildStyles = (rules: Rules): {[key: string]: string | number} => {
  let result: {[key: string]: string | number} = {...styles.default};

  result = rules.weight === 'bold' ? {...result, ...styles.bold} : result;
  result = rules.upperCase ? {...result, ...styles.upperCase} : result;

  result.color = colors[rules.color || 'black'];
  result.fontSize = sizes[rules.size || 'medium'];
  result.marginVertical = rules.margin ? margins[rules.margin] : 0;

  return result;
};
