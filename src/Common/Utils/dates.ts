import day from 'dayjs';
import {NativeModules, Platform} from 'react-native';

require('dayjs/locale/es');

const deviceLanguage: string =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager?.settings.AppleLocale ||
      NativeModules.SettingsManager?.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager?.localeIdentifier;

day.locale((deviceLanguage || '').includes('es') ? 'es' : 'en');
const ofs = (deviceLanguage || '').includes('es') ? 'de' : 'of';

export const getDateFormat = (date: Date): string => {
  return day(date).format(`DD [${ofs}] MMMM , YYYY`);
};
